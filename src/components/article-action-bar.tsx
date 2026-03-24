import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppPalette, fonts, radii, spacing, typeScale } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

export type ArticleAction = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  isActive?: boolean;
  label: string;
  onPress: () => void;
};

type ArticleActionBarProps = {
  actions: ArticleAction[];
};

export function ArticleActionBar({ actions }: ArticleActionBarProps) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <View style={styles.row}>
      {actions.map((action) => (
        <Pressable
          key={action.label}
          accessibilityRole="button"
          onPress={action.onPress}
          style={({ pressed }) => [
            styles.action,
            action.isActive && styles.actionActive,
            pressed && styles.actionPressed,
          ]}>
          <Ionicons color={action.isActive ? palette.surface : palette.text} name={action.icon} size={20} />
          <Text style={[styles.label, action.isActive && styles.labelActive]}>{action.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      width: '100%',
      gap: spacing.sm,
    },
    action: {
      flex: 1,
      minHeight: 66,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: palette.border,
      backgroundColor: palette.surface,
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.sm,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },
    actionActive: {
      backgroundColor: palette.accent,
      borderColor: palette.accent,
    },
    actionPressed: {
      opacity: 0.74,
    },
    label: {
      color: palette.text,
      fontSize: typeScale.label,
      fontFamily: fonts?.body,
      fontWeight: '600',
      textAlign: 'center',
    },
    labelActive: {
      color: palette.surface,
    },
  });
}
