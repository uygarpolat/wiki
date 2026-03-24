import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Platform, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';

import { fonts, layout, spacing } from '@/constants/theme';
import { ArticleLibraryProvider } from '@/providers/article-library';
import { ThemeProvider, useAppTheme } from '@/providers/theme-provider';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ArticleLibraryProvider>
        <RootNavigator />
      </ArticleLibraryProvider>
    </ThemeProvider>
  );
}

function RootNavigator() {
  const router = useRouter();
  const { isDark, palette } = useAppTheme();
  const { width } = useWindowDimensions();
  const headerSideInset = Math.max(spacing.lg, (width - layout.contentMaxWidth) / 2);
  const useCustomWebBackButton = Platform.OS === 'web';

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          animation: 'default',
          headerStyle: {
            backgroundColor: palette.background,
          },
          headerBackButtonDisplayMode: useCustomWebBackButton ? undefined : 'minimal',
          headerShadowVisible: false,
          headerTintColor: palette.text,
          headerLeft: useCustomWebBackButton
            ? ({ canGoBack, tintColor }) => {
                if (!canGoBack) {
                  return null;
                }

                return (
                  <Pressable
                    accessibilityLabel="Go back"
                    accessibilityRole="button"
                    onPress={() => router.back()}
                    style={({ pressed }) => ({
                      paddingLeft: headerSideInset,
                      paddingVertical: spacing.xs,
                      opacity: pressed ? 0.72 : 1,
                    })}>
                    <Ionicons color={tintColor ?? palette.text} name="arrow-back" size={24} />
                  </Pressable>
                );
              }
            : undefined,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: palette.text,
            fontSize: 18,
            fontWeight: '600',
            fontFamily: fonts?.serif,
          },
          contentStyle: {
            backgroundColor: palette.background,
          },
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="favorites" options={{ title: 'Favorites' }} />
        <Stack.Screen name="history" options={{ title: 'History' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </>
  );
}
