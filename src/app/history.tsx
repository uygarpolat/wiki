import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArticleListItem } from '@/components/article-list-item';
import { ScreenShell } from '@/components/screen-shell';
import { AppPalette, fonts, spacing, typeScale } from '@/constants/theme';
import { useArticleLibrary } from '@/providers/article-library';
import { useAppTheme } from '@/providers/theme-provider';

export default function HistoryScreen() {
  const router = useRouter();
  const { palette } = useAppTheme();
  const styles = createStyles(palette);
  const { history, selectArticle } = useArticleLibrary();

  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.title}>Recent discoveries</Text>
        <Text style={styles.copy}>
          The app remembers your recent reads so the experience stays less disposable.
        </Text>
      </View>

      {history.length > 0 ? (
        history.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
            onPress={() => {
              selectArticle(article);
              router.replace('/');
            }}
          />
        ))
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Your trail starts on the home screen</Text>
          <Text style={styles.emptyCopy}>
            Once you explore a few articles, they will appear here in reverse order.
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
