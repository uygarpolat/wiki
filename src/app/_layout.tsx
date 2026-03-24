import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

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
  const { isDark, palette } = useAppTheme();

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          animation: Platform.OS === 'ios' ? 'simple_push' : 'default',
          animationDuration: Platform.OS === 'ios' ? 420 : undefined,
          headerStyle: {
            backgroundColor: palette.background,
          },
          headerBackTitle: 'Back',
          headerShadowVisible: false,
          headerTintColor: palette.text,
          headerTitleStyle: {
            color: palette.text,
            fontSize: 18,
            fontWeight: '600',
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
