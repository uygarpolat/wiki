import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { CC_BY_SA_URL, WIKIMEDIA_APP_GUIDANCE_URL } from '@/constants/legal';
import { ScreenShell } from '@/components/screen-shell';
import { AppPalette, fonts, radii, spacing, typeScale } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

function SectionCard({ children, title }: { children: React.ReactNode; title: string }) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardBody}>{children}</View>
    </View>
  );
}

export default function AboutScreen() {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <ScreenShell contentStyle={styles.content}>
      <SectionCard title="Calm Wiki">
        <Text style={styles.copy}>
          Calm Wiki is a small reading app built around reviewed summaries of Wikipedia articles.
          It is meant to be an entry point into the source, not a replacement for it.
        </Text>
      </SectionCard>

      <SectionCard title="Attribution">
        <Text style={styles.copy}>
          Calm Wiki publishes adapted summaries of Wikipedia content. Each summary links back to
          its source article, and the underlying material remains available under CC BY-SA 4.0.
          Calm Wiki is an independent app and is not affiliated with or endorsed by Wikipedia or
          the Wikimedia Foundation.
        </Text>

        <View style={styles.linkGroup}>
          <Pressable
            onPress={() => {
              void Linking.openURL(CC_BY_SA_URL);
            }}
            style={({ pressed }) => [styles.linkChip, pressed && styles.pressed]}>
            <Text style={styles.linkChipLabel}>CC BY-SA 4.0</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              void Linking.openURL(WIKIMEDIA_APP_GUIDANCE_URL);
            }}
            style={({ pressed }) => [styles.linkChip, pressed && styles.pressed]}>
            <Text style={styles.linkChipLabel}>Wikimedia guidance</Text>
          </Pressable>
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    content: {
      gap: spacing.lg,
      paddingTop: spacing.md,
    },
    card: {
      backgroundColor: palette.surface,
      borderRadius: radii.lg,
      borderWidth: 1,
      borderColor: palette.border,
      padding: spacing.lg,
      gap: spacing.md,
      shadowColor: palette.shadow,
      shadowOpacity: 1,
      shadowRadius: 18,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      elevation: 0,
    },
    cardTitle: {
      color: palette.text,
      fontSize: typeScale.section,
      lineHeight: 30,
      fontFamily: fonts?.serif,
    },
    cardBody: {
      gap: spacing.sm,
    },
    copy: {
      color: palette.textMuted,
      fontSize: typeScale.body,
      lineHeight: 26,
      fontFamily: fonts?.body,
    },
    linkGroup: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
      marginTop: spacing.xs,
    },
    linkChip: {
      minHeight: 38,
      paddingHorizontal: spacing.md,
      borderRadius: radii.pill,
      borderWidth: 1,
      borderColor: palette.border,
      backgroundColor: palette.surfaceMuted,
      alignItems: 'center',
      justifyContent: 'center',
    },
    linkChipLabel: {
      color: palette.text,
      fontSize: typeScale.label,
      fontFamily: fonts?.body,
      fontWeight: '600',
    },
    pressed: {
      opacity: 0.72,
    },
  });
}
