import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, startTransition, useContext, useEffect, useState } from 'react';

import {
  fetchArticleCatalog,
  fetchNextArticle,
  resolveArticleById,
  resolveArticlesByIds,
} from '@/lib/article-service';
import { Article } from '@/types/article';

const STORAGE_KEYS = {
  currentArticleId: 'calm-wiki/current-article-id',
  favoriteIds: 'calm-wiki/favorite-ids',
  historyIds: 'calm-wiki/history-ids',
} as const;

const MIN_ARTICLE_SWAP_MS = 450;

type ArticleLibraryValue = {
  currentArticle: Article | null;
  errorMessage: string | null;
  favorites: Article[];
  history: Article[];
  isRefreshing: boolean;
  dismissError: () => void;
  loadNextArticle: () => Promise<void>;
  removeFavorite: (articleId: string) => void;
  removeHistoryItem: (articleId: string) => void;
  selectArticle: (article: Article) => void;
  toggleFavorite: (article: Article) => void;
  isFavorite: (articleId: string) => boolean;
};

const ArticleLibraryContext = createContext<ArticleLibraryValue | null>(null);

function parseIdList(value: string | null) {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

function prependUnique(articleIds: string[], nextId: string, limit: number) {
  return [nextId, ...articleIds.filter((articleId) => articleId !== nextId)].slice(0, limit);
}

export function ArticleLibraryProvider({ children }: { children: React.ReactNode }) {
  const [articleCatalog, setArticleCatalog] = useState<Article[]>([]);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [historyIds, setHistoryIds] = useState<string[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function hydrate() {
      try {
        const [entries, catalog] = await Promise.all([
          AsyncStorage.multiGet([
            STORAGE_KEYS.currentArticleId,
            STORAGE_KEYS.favoriteIds,
            STORAGE_KEYS.historyIds,
          ]),
          fetchArticleCatalog(),
        ]);

        if (!isMounted) {
          return;
        }

        const storedCurrentArticleId =
          entries.find(([key]) => key === STORAGE_KEYS.currentArticleId)?.[1] ?? null;
        const validArticleIds = new Set(catalog.map((article) => article.id));
        const storedFavoriteIds = parseIdList(
          entries.find(([key]) => key === STORAGE_KEYS.favoriteIds)?.[1] ?? null
        ).filter((articleId) => validArticleIds.has(articleId));
        const storedHistoryIds = parseIdList(
          entries.find(([key]) => key === STORAGE_KEYS.historyIds)?.[1] ?? null
        ).filter((articleId) => validArticleIds.has(articleId));

        setArticleCatalog(catalog);
        setCurrentArticle(
          storedCurrentArticleId && validArticleIds.has(storedCurrentArticleId)
            ? resolveArticleById(storedCurrentArticleId, catalog)
            : null
        );
        setFavoriteIds(storedFavoriteIds);
        setHistoryIds(storedHistoryIds);
        setErrorMessage(null);
        setIsHydrated(true);
      } catch {
        if (!isMounted) {
          return;
        }

        setErrorMessage('Could not load the article library right now. Please try again.');
        setIsHydrated(true);
      }
    }

    void hydrate();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    void AsyncStorage.multiSet([
      [STORAGE_KEYS.currentArticleId, currentArticle?.id ?? ''],
      [STORAGE_KEYS.favoriteIds, JSON.stringify(favoriteIds)],
      [STORAGE_KEYS.historyIds, JSON.stringify(historyIds)],
    ]);
  }, [currentArticle?.id, favoriteIds, historyIds, isHydrated]);

  useEffect(() => {
    if (!isHydrated || currentArticle) {
      return;
    }
    void materializeNextArticle();
  }, [currentArticle, isHydrated]);

  async function materializeNextArticle(extraExcludeIds: string[] = []) {
    setIsRefreshing(true);
    const startedAt = Date.now();

    try {
      const catalog = articleCatalog.length > 0 ? articleCatalog : await fetchArticleCatalog();
      const article = await fetchNextArticle(
        currentArticle
          ? [currentArticle.id, ...historyIds, ...extraExcludeIds]
          : [...historyIds, ...extraExcludeIds],
        { articles: catalog }
      );

      const remainingDelay = MIN_ARTICLE_SWAP_MS - (Date.now() - startedAt);

      if (remainingDelay > 0) {
        await new Promise((resolve) => {
          setTimeout(resolve, remainingDelay);
        });
      }

      startTransition(() => {
        setArticleCatalog(catalog);
        setCurrentArticle(article);
        setHistoryIds((existingIds) => prependUnique(existingIds, article.id, 24));
        setErrorMessage(null);
      });
    } catch {
      setErrorMessage('Could not load a new article right now. Please try again.');
    } finally {
      setIsRefreshing(false);
    }
  }

  async function loadNextArticle() {
    await materializeNextArticle();
  }

  function selectArticle(article: Article) {
    startTransition(() => {
      setCurrentArticle(article);
      setHistoryIds((existingIds) => prependUnique(existingIds, article.id, 24));
    });
  }

  function toggleFavorite(article: Article) {
    setFavoriteIds((existingIds) =>
      existingIds.includes(article.id)
        ? existingIds.filter((articleId) => articleId !== article.id)
        : prependUnique(existingIds, article.id, 24)
    );
  }

  function removeFavorite(articleId: string) {
    setFavoriteIds((existingIds) => existingIds.filter((id) => id !== articleId));
  }

  function removeHistoryItem(articleId: string) {
    setHistoryIds((existingIds) => existingIds.filter((id) => id !== articleId));
  }

  function isFavorite(articleId: string) {
    return favoriteIds.includes(articleId);
  }

  const value: ArticleLibraryValue = {
    currentArticle,
    errorMessage,
    favorites: resolveArticlesByIds(favoriteIds, articleCatalog),
    history: resolveArticlesByIds(historyIds, articleCatalog),
    isRefreshing,
    dismissError: () => setErrorMessage(null),
    loadNextArticle,
    removeFavorite,
    removeHistoryItem,
    selectArticle,
    toggleFavorite,
    isFavorite,
  };

  return <ArticleLibraryContext.Provider value={value}>{children}</ArticleLibraryContext.Provider>;
}

export function useArticleLibrary() {
  const context = useContext(ArticleLibraryContext);
  if (!context) {
    throw new Error('useArticleLibrary must be used inside ArticleLibraryProvider');
  }
  return context;
}
