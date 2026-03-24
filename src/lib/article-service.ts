import { publishedArticles } from '@/data/mock-articles';
import { Database } from '@/lib/database.types';
import { hasSupabaseConfig, supabase } from '@/lib/supabase';
import { Article } from '@/types/article';

const MIN_FETCH_DELAY_MS = 420;
const ARTICLE_FETCH_LIMIT = 200;

type ArticleRow = Database['public']['Tables']['articles']['Row'];

let cachedArticles: Article[] | null = null;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function resolveDevelopmentCatalogFallback() {
  if (__DEV__) {
    console.warn(
      '[Calm Wiki] Supabase configuration is missing. Falling back to bundled mock articles in development.'
    );
    cachedArticles = publishedArticles;
    return cachedArticles;
  }

  throw new Error('The app is missing its Supabase configuration.');
}

function splitSummary(summaryText: string) {
  return summaryText
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function fromArticleRow(row: ArticleRow): Article {
  return {
    id: row.slug,
    title: row.wikipedia_title,
    category: row.category,
    readingMinutes: row.reading_minutes,
    summaryParagraphs: splitSummary(row.summary_text),
    sourceExtract: row.source_extract,
    sourceUrl: row.wikipedia_url,
    sourceHistoryUrl: row.article_history_url,
    attribution: row.attribution_text,
  };
}

function pickNextArticle(articles: Article[], excludeIds: string[]) {
  const pool = articles.filter((article) => !excludeIds.includes(article.id));
  const source = pool.length > 0 ? pool : articles;
  const nextIndex = Math.floor(Math.random() * source.length);
  return source[nextIndex] ?? articles[0] ?? null;
}

export function resolveArticleById(articleId: string, articles: Article[]) {
  return articles.find((article) => article.id === articleId) ?? null;
}

export function resolveArticlesByIds(articleIds: string[], articles: Article[]) {
  return articleIds
    .map((articleId) => resolveArticleById(articleId, articles))
    .filter((article): article is Article => Boolean(article));
}

export async function fetchArticleCatalog(forceRefresh = false) {
  if (!forceRefresh && cachedArticles) {
    return cachedArticles;
  }

  if (!hasSupabaseConfig || !supabase) {
    return resolveDevelopmentCatalogFallback();
  }

  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('quality_status', 'published')
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false })
    .limit(ARTICLE_FETCH_LIMIT);

  if (error) {
    throw error;
  }

  const rows = (data ?? []) as ArticleRow[];
  cachedArticles = rows.map(fromArticleRow);
  return cachedArticles;
}

export async function fetchNextArticle(
  excludeIds: string[] = [],
  options?: { articles?: Article[]; forceRefresh?: boolean }
) {
  const [articles] = await Promise.all([
    options?.articles ? Promise.resolve(options.articles) : fetchArticleCatalog(options?.forceRefresh),
    wait(MIN_FETCH_DELAY_MS),
  ]);

  const nextArticle = pickNextArticle(articles, excludeIds);

  if (!nextArticle) {
    throw new Error('No published articles are available');
  }

  return nextArticle;
}
