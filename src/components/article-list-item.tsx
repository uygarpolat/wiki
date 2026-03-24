import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppPalette, fonts, radii, spacing } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';
import { Article } from '@/types/article';

type ArticleListItemProps = {
  article: Article;
  onDelete: () => void;
  onPress: () => void;
};

export function ArticleListItem({ article, onDelete, onPress }: ArticleListItemProps) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <View style={styles.row}>
      <Pressable onPress={onPress} style={({ pressed }) => [styles.openArea, pressed && styles.pressed]}>
        <Text style={styles.title}>{article.title}</Text>
      </Pressable>

      <Pressable
        accessibilityHint={`Removes ${article.title}`}
        accessibilityLabel={`Remove ${article.title}`}
        accessibilityRole="button"
        onPress={onDelete}
        style={({ pressed }) => [styles.deleteButton, pressed && styles.pressed]}>
        <Ionicons color={palette.textMuted} name="close" size={18} />
      </Pressable>
    </View>
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
      gap: spacing.sm,
    },
    pressed: {
      opacity: 0.76,
    },
    openArea: {
      flex: 1,
      minHeight: 34,
      justifyContent: 'center',
    },
    title: {
      color: palette.text,
      fontSize: 18,
      lineHeight: 24,
      fontFamily: fonts?.serif,
    },
    deleteButton: {
      width: 34,
      height: 34,
      borderRadius: radii.pill,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.surfaceMuted,
      borderWidth: 1,
      borderColor: palette.border,
      flexShrink: 0,
    },
    open: {
      color: palette.textMuted,
      fontFamily: fonts?.body,
    },
  });
}
