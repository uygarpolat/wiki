import '@/global.css';

import { Platform } from 'react-native';

export const lightPalette = {
  background: '#F6F1E7',
  surface: '#FFFDF8',
  surfaceMuted: '#F1E9DC',
  border: '#DED2C2',
  text: '#1F1A16',
  textMuted: '#74695F',
  accent: '#5B7063',
  accentSoft: '#DCE6DF',
  shadow: 'rgba(58, 45, 34, 0.08)',
} as const;

export const darkPalette = {
  background: '#171310',
  surface: '#201B17',
  surfaceMuted: '#2A241F',
  border: '#41372E',
  text: '#F4ECE0',
  textMuted: '#C7B7A4',
  accent: '#97B2A1',
  accentSoft: '#29352E',
  shadow: 'rgba(0, 0, 0, 0.28)',
} as const;

export const palette = lightPalette;

export type AppPalette = typeof lightPalette | typeof darkPalette;
export type ThemeMode = 'light' | 'dark';

export function resolvePalette(mode: ThemeMode): AppPalette {
  return mode === 'dark' ? darkPalette : lightPalette;
}

export const fonts = Platform.select({
  ios: {
    body: 'system-ui',
    serif: 'ui-serif',
  },
  android: {
    body: 'sans-serif',
    serif: 'serif',
  },
  default: {
    body: 'sans-serif',
    serif: 'serif',
  },
  web: {
    body: 'var(--font-body)',
    serif: 'var(--font-serif)',
  },
});

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radii = {
  sm: 12,
  md: 18,
  lg: 28,
  pill: 999,
} as const;

export const layout = {
  contentMaxWidth: 760,
} as const;

export const typeScale = {
  eyebrow: 12,
  label: 13,
  body: 16,
  lead: 18,
  title: 34,
  section: 22,
} as const;
