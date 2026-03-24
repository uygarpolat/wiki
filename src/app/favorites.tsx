import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArticleListItem } from '@/components/article-list-item';
import { ScreenShell } from '@/components/screen-shell';
import { AppPalette, fonts, spacing, typeScale } from '@/constants/theme';
import { useArticleLibrary } from '@/providers/article-library';
import { useAppTheme } from '@/providers/theme-provider';

export default function FavoritesScreen() {
  const router = useRouter();
  const { palette } = useAppTheme();
  const styles = createStyles(palette);
  const { favorites, removeFavorite, selectArticle } = useArticleLibrary();

  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.title}>Saved articles</Text>
        <Text style={styles.copy}>A compact shelf for the entries you want to revisit later.</Text>
      </View>

      {favorites.length > 0 ? (
        favorites.map((article) => (
          <View key={article.id} style={styles.listItemWrap}>
            <ArticleListItem
              article={article}
              onDelete={() => removeFavorite(article.id)}
              onPress={() => {
                selectArticle(article);
                router.replace('/');
              }}
            />
          </View>
        ))
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Nothing saved yet</Text>
          <Text style={styles.emptyCopy}>
            Save an article from the home screen and it will appear here.
          </Text>
        </View>
      )}
    </ScreenShell>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    content: {
      gap: spacing.md,
      paddingTop: spacing.md,
    },
    hero: {
      gap: spacing.xs,
      marginBottom: spacing.sm,
    },
    title: {
      color: palette.text,
      fontSize: typeScale.section,
      lineHeight: 30,
      fontFamily: fonts?.serif,
    },
    copy: {
      color: palette.textMuted,
      fontSize: typeScale.body,
      lineHeight: 24,
      fontFamily: fonts?.body,
    },
    emptyState: {
      gap: spacing.xs,
    },
    listItemWrap: {
      marginBottom: spacing.sm,
    },
    emptyTitle: {
      color: palette.text,
      fontSize: 18,
      fontFamily: fonts?.body,
      fontWeight: '600',
    },
    emptyCopy: {
      color: palette.textMuted,
      fontSize: typeScale.body,
      lineHeight: 24,
      fontFamily: fonts?.body,
    },
  });
}
