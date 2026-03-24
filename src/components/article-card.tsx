import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CC_BY_SA_URL } from '@/constants/legal';
import { AppPalette, fonts, radii, spacing, typeScale } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';
import { Article } from '@/types/article';

type ArticleCardProps = {
  article: Article;
  onOpenLicense: () => void;
  onOpenSource: () => void;
};

export function ArticleCard({ article, onOpenLicense, onOpenSource }: ArticleCardProps) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <View style={styles.card}>
      <Text style={styles.metaText}>From Wikipedia · {article.readingMinutes} min read</Text>

      <Text style={styles.title}>{article.title}</Text>

      <Text style={styles.sourceLine}>
        Original article:{' '}
        <Text accessibilityRole="link" onPress={onOpenSource} style={styles.sourceLineLink}>
          {article.title}
        </Text>
      </Text>

      <View style={styles.summaryBlock}>
        {article.summaryParagraphs.map((paragraph) => (
          <Text key={paragraph} style={styles.summaryParagraph}>
            {paragraph}
          </Text>
        ))}
      </View>

      <View style={styles.sourceBlock}>
        <Text style={styles.sourceLabel}>Attribution</Text>
        <Text style={styles.sourceText}>
          This summary adapts{' '}
          <Text accessibilityRole="link" onPress={onOpenSource} style={styles.sourceLink}>
            this Wikipedia article
          </Text>
          {' '}and is available under{' '}
          <Text
            accessibilityHint={`Opens ${CC_BY_SA_URL}`}
            accessibilityRole="link"
            onPress={onOpenLicense}
            style={styles.sourceLink}>
            CC BY-SA 4.0
          </Text>
          .
        </Text>
      </View>
    </View>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    card: {
      backgroundColor: palette.surface,
      borderRadius: radii.lg,
      borderWidth: 1,
      borderColor: palette.border,
      padding: spacing.lg,
      gap: spacing.md,
      shadowColor: palette.shadow,
      shadowOpacity: 1,
      shadowRadius: 22,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      elevation: 0,
    },
    metaText: {
      color: palette.textMuted,
      fontSize: typeScale.label,
      fontFamily: fonts?.body,
      fontWeight: '600',
    },
    title: {
      color: palette.text,
      fontSize: typeScale.title,
      lineHeight: 40,
      fontFamily: fonts?.serif,
    },
    sourceLine: {
      color: palette.textMuted,
      fontSize: typeScale.body,
      lineHeight: 24,
      fontFamily: fonts?.body,
    },
    sourceLineLink: {
      color: palette.accent,
      textDecorationLine: 'underline',
      fontWeight: '600',
    },
    summaryBlock: {
      gap: spacing.md,
    },
    summaryParagraph: {
      color: palette.text,
      fontSize: typeScale.body,
      lineHeight: 29,
      fontFamily: fonts?.body,
    },
    sourceBlock: {
      borderTopWidth: 1,
      borderTopColor: palette.border,
      paddingTop: spacing.md,
      gap: spacing.xs,
    },
    sourceLabel: {
      color: palette.textMuted,
      fontSize: typeScale.eyebrow,
      letterSpacing: 1,
      textTransform: 'uppercase',
      fontFamily: fonts?.body,
      fontWeight: '600',
    },
    sourceText: {
      color: palette.textMuted,
      fontSize: typeScale.label,
      lineHeight: 22,
      fontFamily: fonts?.body,
    },
    sourceLink: {
      color: palette.accent,
      textDecorationLine: 'underline',
      fontWeight: '600',
    },
  });
}
