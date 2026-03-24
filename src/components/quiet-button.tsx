import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { AppPalette, fonts, radii, spacing, typeScale } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

type QuietButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'ghost' | 'outline' | 'solid';
  disabled?: boolean;
};

export function QuietButton({
  label,
  onPress,
  variant = 'outline',
  disabled = false,
}: QuietButtonProps) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);
  const isSolid = variant === 'solid';
  const isGhost = variant === 'ghost';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isSolid && styles.buttonSolid,
        isGhost && styles.buttonGhost,
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
      ]}>
      <Text style={[styles.label, isSolid && styles.labelSolid]}>{label}</Text>
    </Pressable>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    button: {
      minHeight: 42,
      borderRadius: radii.pill,
      borderWidth: 1,
      borderColor: palette.border,
      paddingHorizontal: spacing.md,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.surface,
    },
    buttonSolid: {
      backgroundColor: palette.accent,
      borderColor: palette.accent,
    },
    buttonGhost: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      paddingHorizontal: spacing.sm,
    },
    buttonPressed: {
      opacity: 0.72,
    },
    buttonDisabled: {
      opacity: 0.5,
    },
    label: {
      color: palette.text,
      fontSize: typeScale.label,
      fontFamily: fonts?.body,
      fontWeight: '600',
    },
    labelSolid: {
      color: palette.surface,
    },
  });
}
