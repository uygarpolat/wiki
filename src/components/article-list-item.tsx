import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppPalette, fonts, radii, spacing, typeScale } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';
import { Article } from '@/types/article';

type ArticleListItemProps = {
  article: Article;
  onPress: () => void;
};

export function ArticleListItem({ article, onPress }: ArticleListItemProps) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.copy}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.meta}>
          {article.category} · {article.readingMinutes} min
        </Text>
        <Text style={styles.preview} numberOfLines={3}>
          {article.summaryParagraphs[0]}
        </Text>
      </View>
      <Text style={styles.open}>Open</Text>
    </Pressable>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    row: {
      backgroundColor: palette.surface,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: palette.border,
      padding: spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.md,
    },
    pressed: {
      opacity: 0.76,
    },
    copy: {
      flex: 1,
      gap: spacing.xs,
    },
    title: {
      color: palette.text,
      fontSize: 20,
      lineHeight: 26,
      fontFamily: fonts?.serif,
    },
    meta: {
      color: palette.textMuted,
      fontSize: typeScale.label,
      fontFamily: fonts?.body,
    },
    preview: {
      color: palette.text,
      fontSize: typeScale.body,
      lineHeight: 24,
      fontFamily: fonts?.body,
    },
    open: {
      color: palette.accent,
      fontSize: typeScale.label,
      fontFamily: fonts?.body,
      fontWeight: '600',
    },
  });
}
