import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Linking, Platform, Pressable, Share, StyleSheet, Text, View } from 'react-native';

import { ArticleAction, ArticleActionBar } from '@/components/article-action-bar';
import { ArticleCard } from '@/components/article-card';
import { MenuSheet } from '@/components/menu-sheet';
import { QuietButton } from '@/components/quiet-button';
import { CC_BY_SA_URL } from '@/constants/legal';
import { ScreenShell } from '@/components/screen-shell';
import { AppPalette, fonts, radii, spacing, typeScale } from '@/constants/theme';
import { useArticleLibrary } from '@/providers/article-library';
import { useAppTheme } from '@/providers/theme-provider';

export default function HomeScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { palette } = useAppTheme();
  const styles = createStyles(palette);
  const {
    currentArticle,
    dismissError,
    errorMessage,
    loadNextArticle,
    toggleFavorite,
    isFavorite,
    isRefreshing,
  } = useArticleLibrary();

  async function handleOpenSource() {
    if (!currentArticle) {
      return;
    }

    await Linking.openURL(currentArticle.sourceUrl);
  }

  async function handleShare() {
    if (!currentArticle) {
      return;
    }

    const summaryText = currentArticle.summaryParagraphs.join('\n\n');

    await Share.share({
      message: `${currentArticle.title}\n\n${summaryText}\n\nAdapted from Wikipedia content.\nOriginal article: ${currentArticle.sourceUrl}\nLicense: ${CC_BY_SA_URL}`,
    });
  }

  async function handleOpenLicense() {
    await Linking.openURL(CC_BY_SA_URL);
  }

  const actions: ArticleAction[] = currentArticle
    ? [
        {
          icon: isRefreshing ? 'hourglass-outline' : 'shuffle-outline',
          label: isRefreshing ? 'Finding' : 'Another',
          onPress: () => {
            if (!isRefreshing) {
              void loadNextArticle();
            }
          },
        },
        {
          icon: isFavorite(currentArticle.id) ? 'heart' : 'heart-outline',
          isActive: isFavorite(currentArticle.id),
          label: isFavorite(currentArticle.id) ? 'Saved' : 'Save',
          onPress: () => toggleFavorite(currentArticle),
        },
        {
          icon: 'share-social-outline',
          label: 'Share',
          onPress: handleShare,
        },
      ]
    : [];

  return (
    <ScreenShell
      includeTopInset
      contentStyle={styles.screenContent}
      scrollResetKey={currentArticle?.id ?? null}>
      <View style={styles.topBar}>
        <Text
          accessibilityRole="header"
          adjustsFontSizeToFit
          minimumFontScale={0.84}
          numberOfLines={1}
          style={styles.title}>
          Calm Wiki
        </Text>

        <Pressable
          accessibilityLabel="Open menu"
          accessibilityRole="button"
          onPress={() => setIsMenuOpen(true)}
          style={({ pressed }) => [styles.menuButton, pressed && styles.pressed]}>
          <Ionicons color={palette.text} name="menu-outline" size={28} />
        </Pressable>
      </View>

      {currentArticle ? (
        <>
          <ArticleCard
            article={currentArticle}
            onOpenLicense={handleOpenLicense}
            onOpenSource={handleOpenSource}
          />

          <View style={styles.actionsWrap}>
            <ArticleActionBar actions={actions} />
          </View>

          {errorMessage ? (
            <View style={styles.errorCard}>
              <Text style={styles.errorTitle}>Couldn&apos;t refresh the article</Text>
              <Text style={styles.errorCopy}>{errorMessage}</Text>
              <View style={styles.errorActions}>
                <QuietButton
                  label="Try again"
                  onPress={() => {
                    dismissError();
                    void loadNextArticle();
                  }}
                />
                <QuietButton label="Dismiss" variant="ghost" onPress={dismissError} />
              </View>
            </View>
          ) : null}
        </>
      ) : (
        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderTitle}>
            {errorMessage ? 'The reading shelf is unavailable right now' : 'Opening the reading shelf...'}
          </Text>
          <Text style={styles.placeholderCopy}>
            {errorMessage
              ? errorMessage
              : 'The app is loading the current published library.'}
          </Text>
          {errorMessage ? (
            <View style={styles.placeholderAction}>
              <QuietButton
                label="Try again"
                variant="solid"
                onPress={() => {
                  dismissError();
                  void loadNextArticle();
                }}
              />
            </View>
          ) : null}
        </View>
      )}

      <MenuSheet onClose={() => setIsMenuOpen(false)} open={isMenuOpen} />
    </ScreenShell>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    screenContent: {
      gap: spacing.xl,
      paddingTop: spacing.sm,
    },
    topBar: {
      position: 'relative',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginBottom: spacing.sm,
      minHeight: 74,
      paddingRight: 72,
    },
    title: {
      color: palette.text,
      fontSize: 42,
      lineHeight: 50,
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
      width: '100%',
    },
    menuButton: {
      position: 'absolute',
      right: 0,
      width: 50,
      height: 50,
      borderRadius: radii.pill,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.surfaceMuted,
      borderWidth: 1,
      borderColor: palette.border,
    },
    actionsWrap: {
      marginTop: spacing.xs,
    },
    errorCard: {
      marginTop: spacing.sm,
      borderRadius: radii.md,
      borderWidth: 1,
      borderColor: palette.border,
      backgroundColor: palette.surface,
      padding: spacing.md,
      gap: spacing.xs,
    },
    errorTitle: {
      color: palette.text,
      fontSize: 16,
      lineHeight: 22,
      fontFamily: fonts?.body,
      fontWeight: '700',
    },
    errorCopy: {
      color: palette.textMuted,
      fontSize: typeScale.body,
      lineHeight: 24,
      fontFamily: fonts?.body,
    },
    errorActions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
      marginTop: spacing.xs,
    },
    placeholderCard: {
      borderRadius: radii.lg,
      borderWidth: 1,
      borderColor: palette.border,
      backgroundColor: palette.surface,
      padding: spacing.lg,
      gap: spacing.sm,
    },
    placeholderTitle: {
      color: palette.text,
      fontSize: typeScale.section,
      lineHeight: 30,
      fontFamily: fonts?.serif,
    },
    placeholderCopy: {
      color: palette.textMuted,
      fontSize: typeScale.body,
      lineHeight: 26,
      fontFamily: fonts?.body,
    },
    placeholderAction: {
      marginTop: spacing.sm,
      alignItems: 'flex-start',
    },
    pressed: {
      opacity: 0.72,
    },
  });
}
