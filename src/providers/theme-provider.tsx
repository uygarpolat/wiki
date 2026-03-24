import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { AppPalette, ThemeMode, resolvePalette } from '@/constants/theme';

const STORAGE_KEY = 'calm-wiki/theme-mode';

type ThemeContextValue = {
  isDark: boolean;
  palette: AppPalette;
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [hasHydratedTheme, setHasHydratedTheme] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function hydrateThemeMode() {
      const storedThemeMode = await AsyncStorage.getItem(STORAGE_KEY);

      if (!isMounted) {
        return;
      }

      if (storedThemeMode === 'light' || storedThemeMode === 'dark') {
        setThemeMode(storedThemeMode);
      }

      setHasHydratedTheme(true);
    }

    void hydrateThemeMode();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!hasHydratedTheme) {
      return;
    }

    void AsyncStorage.setItem(STORAGE_KEY, themeMode);
  }, [hasHydratedTheme, themeMode]);

  const value: ThemeContextValue = {
    isDark: themeMode === 'dark',
    palette: resolvePalette(themeMode),
    themeMode,
    toggleThemeMode: () => {
      setThemeMode((currentThemeMode) => (currentThemeMode === 'dark' ? 'light' : 'dark'));
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used inside ThemeProvider');
  }

  return context;
}
