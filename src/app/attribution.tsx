import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

import { QuietButton } from '@/components/quiet-button';
import { CC_BY_SA_URL, WIKIMEDIA_APP_GUIDANCE_URL } from '@/constants/legal';
import { ScreenShell } from '@/components/screen-shell';
import { AppPalette, fonts, radii, spacing, typeScale } from '@/constants/theme';
import { useArticleLibrary } from '@/providers/article-library';
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

export default function AttributionScreen() {
  const { currentArticle } = useArticleLibrary();
  const { palette } = useAppTheme();
  const styles = createStyles(palette);

  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.title}>Attribution</Text>
        <Text style={styles.copy}>
          Calm Wiki publishes adapted summaries of Wikipedia articles. The original article remains
          the primary source, and the app should preserve source, license, and authorship access.
        </Text>
      </View>

      <InfoBlock
        title="Source and license"
        copy="Each summary links back to its source article and should remain available under CC BY-SA 4.0."
      />
      <InfoBlock
        title="Authorship"
        copy="Contributor information for Wikipedia content is available through the article history page, which the app keeps accessible from here."
      />
      <InfoBlock
        title="Independence"
        copy="Calm Wiki is an independent app. It should not imply affiliation with or endorsement by Wikipedia or the Wikimedia Foundation."
      />

      {currentArticle ? (
        <View style={styles.linkGroup}>
          <QuietButton
            label="Open current article"
            onPress={() => {
              void Linking.openURL(currentArticle.sourceUrl);
            }}
          />
          <QuietButton
            label="Open article history"
            onPress={() => {
              void Linking.openURL(currentArticle.sourceHistoryUrl);
            }}
          />
        </View>
      ) : null}

      <View style={styles.linkGroup}>
        <QuietButton
          label="Read CC BY-SA 4.0"
          variant="ghost"
          onPress={() => {
            void Linking.openURL(CC_BY_SA_URL);
          }}
        />
      </View>

      <QuietButton
        label="Read Wikimedia app guidance"
        variant="ghost"
        onPress={() => {
          void Linking.openURL(WIKIMEDIA_APP_GUIDANCE_URL);
        }}
      />
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
    linkGroup: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
    },
  });
}
