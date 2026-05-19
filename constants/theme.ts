import { Platform } from 'react-native';

/**
 * Single source of truth for raw color values.
 * Mirrors the tokens defined in tailwind.config.js so that imperative
 * APIs (StatusBar, Lucide icon `color` prop, navigation theme) can stay
 * in sync with the NativeWind classes used throughout the app.
 */
export const palette = {
  primary: '#B49372',
  primarySoft: '#F3E5D8',
  pitch: '#1A261A',
  background: '#FFFFFF',
  surface: '#F5F5F7',
  card: '#FFFFFF',
  text: '#121212',
  textMuted: '#8E8E93',
  textSubtle: '#B6B6BC',
  border: '#E5E5EA',
  borderStrong: '#D1D1D6',
  gold: '#D6A23E',
  silver: '#A8A8A8',
  bronze: '#B07A4E',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
} as const;

const tintColorLight = palette.primary;
const tintColorDark = palette.primarySoft;

export const Colors = {
  light: {
    text: palette.text,
    background: palette.background,
    tint: tintColorLight,
    icon: palette.textMuted,
    tabIconDefault: palette.textMuted,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#0F1410',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const radii = {
  xs: 6,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  pill: 999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 48,
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
