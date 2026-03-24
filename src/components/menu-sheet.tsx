import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { AppPalette, fonts, layout, radii, spacing, typeScale } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

type MenuSheetProps = {
  onClose: () => void;
  open: boolean;
};

type MenuLinkRowProps = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  onPress: () => void;
};

function MenuLinkRow({ icon, label, onPress }: MenuLinkRowProps) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}>
      <View style={styles.menuItemLeft}>
        <Ionicons color={palette.text} name={icon} size={19} />
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      <Ionicons color={palette.textMuted} name="chevron-forward" size={18} />
    </Pressable>
  );
}

function ThemeToggle() {
  const { isDark, palette, toggleThemeMode } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: isDark }}
      onPress={toggleThemeMode}
      style={({ pressed }) => [styles.toggleRow, pressed && styles.pressed]}>
      <View style={styles.menuItemLeft}>
        <Ionicons color={palette.text} name={isDark ? 'moon-outline' : 'sunny-outline'} size={19} />
        <Text style={styles.menuLabel}>Dark mode</Text>
      </View>

      <View style={[styles.toggleTrack, isDark && styles.toggleTrackActive]}>
        <View style={[styles.toggleThumb, isDark && styles.toggleThumbActive]} />
      </View>
    </Pressable>
  );
}

export function MenuSheet({ onClose, open }: MenuSheetProps) {
  const router = useRouter();
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  function navigateTo(path: '/favorites' | '/history' | '/about') {
    onClose();

    requestAnimationFrame(() => {
      router.push(path);
    });
  }

  return (
    <Modal animationType="none" onRequestClose={onClose} transparent visible={open}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.sheetRail}>
              <View style={styles.sheet}>
                <View style={styles.headerRow}>
                  <Text
                    accessibilityRole="header"
                    adjustsFontSizeToFit
                    minimumFontScale={0.9}
                    numberOfLines={1}
                    style={styles.title}>
                    Calm Wiki
                  </Text>
                  <Pressable onPress={onClose} style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}>
                    <Ionicons color={palette.text} name="close" size={20} />
                  </Pressable>
                </View>

                <MenuLinkRow
                  icon="heart-outline"
                  label="Favorites"
                  onPress={() => {
                    navigateTo('/favorites');
                  }}
                />
                <MenuLinkRow
                  icon="time-outline"
                  label="History"
                  onPress={() => {
                    navigateTo('/history');
                  }}
                />
                <MenuLinkRow
                  icon="information-circle-outline"
                  label="About"
                  onPress={() => {
                    navigateTo('/about');
                  }}
                />

                <ThemeToggle />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(15, 12, 9, 0.28)',
      padding: spacing.lg,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    sheetRail: {
      width: '100%',
      maxWidth: layout.contentMaxWidth,
      alignItems: 'flex-end',
    },
    sheet: {
      width: '100%',
      maxWidth: 360,
      marginTop: spacing.xl,
      backgroundColor: palette.surface,
      borderRadius: radii.lg,
      borderWidth: 1,
      borderColor: palette.border,
      padding: spacing.lg,
      gap: spacing.sm,
      shadowColor: palette.shadow,
      shadowOpacity: 1,
      shadowRadius: 20,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      elevation: 0,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: spacing.md,
      marginBottom: spacing.xs,
    },
    title: {
      color: palette.text,
      fontSize: 28,
      lineHeight: 34,
      fontFamily: Platform.select({
        ios: 'Snell Roundhand',
        android: fonts?.serif,
        default: fonts?.serif,
        web: 'cursive',
      }),
      fontStyle: Platform.select({
        ios: 'normal',
        default: 'italic',
      }),
      flex: 1,
    },
    closeButton: {
      width: 36,
      height: 36,
      borderRadius: radii.pill,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.surfaceMuted,
    },
    menuItem: {
      minHeight: 54,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: palette.border,
      backgroundColor: palette.surface,
      paddingHorizontal: spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.md,
    },
    menuItemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      flex: 1,
    },
    menuLabel: {
      color: palette.text,
      fontSize: typeScale.body,
      fontFamily: fonts?.body,
    },
    toggleRow: {
      minHeight: 58,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: palette.border,
      backgroundColor: palette.surface,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.md,
      marginTop: spacing.xs,
    },
    toggleTrack: {
      width: 50,
      height: 30,
      borderRadius: radii.pill,
      backgroundColor: palette.surfaceMuted,
      paddingHorizontal: 3,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: palette.border,
    },
    toggleTrackActive: {
      backgroundColor: palette.accentSoft,
      borderColor: palette.accent,
      alignItems: 'flex-end',
    },
    toggleThumb: {
      width: 22,
      height: 22,
      borderRadius: radii.pill,
      backgroundColor: palette.accent,
    },
    toggleThumbActive: {
      backgroundColor: palette.accent,
    },
    pressed: {
      opacity: 0.76,
    },
  });
}
