import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { QuietButton } from '@/components/quiet-button';
import { ScreenShell } from '@/components/screen-shell';
import { AppPalette, fonts, radii, spacing, typeScale } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

function InfoBlock({
  copy,
  title,
}: {
  copy: string;
  title: string;
}) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <View style={styles.infoBlock}>
      <Text style={styles.blockTitle}>{title}</Text>
      <Text style={styles.blockCopy}>{copy}</Text>
    </View>
  );
}

export default function AboutScreen() {
  const router = useRouter();
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.title}>About Calm Wiki</Text>
        <Text style={styles.copy}>
          Calm Wiki is meant to feel like a small reading room rather than a content feed. The app
          presents one reviewed Wikipedia-based summary at a time, keeps the interface light, and
          leaves the deeper source article one tap away.
        </Text>
      </View>

      <InfoBlock
        title="What the app is"
        copy="A quiet mobile reader for curated Wikipedia articles. It is not meant to replace Wikipedia, only to make a strong entry point into it."
      />
      <InfoBlock
        title="How content gets in"
        copy="Article discovery and screening happen outside the app through scripts and review steps. The mobile app only reads from already published entries."
      />
      <InfoBlock
        title="How it plans to make money"
        copy="The current product assumption is a free app with restrained advertising later, if the ads can stay unobtrusive enough not to break the mood."
      />
      <InfoBlock
        title="What stays local"
        copy="Favorites, history, and theme preference stay on the device in this scaffold."
      />

      <QuietButton label="Back to article" variant="solid" onPress={() => router.replace('/')} />
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
    infoBlock: {
      backgroundColor: palette.surface,
      borderWidth: 1,
      borderColor: palette.border,
      borderRadius: radii.md,
      padding: spacing.md,
      gap: spacing.xs,
    },
    blockTitle: {
      color: palette.text,
      fontSize: 17,
      fontFamily: fonts?.body,
      fontWeight: '600',
    },
    blockCopy: {
      color: palette.textMuted,
      fontSize: typeScale.body,
      lineHeight: 24,
      fontFamily: fonts?.body,
    },
  });
}
