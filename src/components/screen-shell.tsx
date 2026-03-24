import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppPalette, spacing } from '@/constants/theme';
import { useAppTheme } from '@/providers/theme-provider';

type ScreenShellProps = {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  includeTopInset?: boolean;
  scrollResetKey?: string | number | null;
};

export function ScreenShell({
  children,
  contentStyle,
  includeTopInset = false,
  scrollResetKey = null,
}: ScreenShellProps) {
  const { palette } = useAppTheme();
  const styles = createStyles(palette);
  const scrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    if (scrollResetKey === null) {
      return;
    }

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [scrollResetKey]);

  return (
    <SafeAreaView
      edges={includeTopInset ? ['top', 'left', 'right', 'bottom'] : ['left', 'right', 'bottom']}
      style={styles.safeArea}>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={[styles.content, contentStyle]}>
        <View style={styles.maxWidth}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(palette: AppPalette) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: palette.background,
    },
    scroll: {
      flex: 1,
    },
    content: {
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.xxl,
    },
    maxWidth: {
      width: '100%',
      maxWidth: 760,
      alignSelf: 'center',
    },
  });
}
