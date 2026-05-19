/** @type {import('tailwindcss').Config} */
const { hairlineWidth } = require('nativewind/theme');

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B49372',
          foreground: '#FFFFFF',
          soft: '#F3E5D8',
        },
        secondary: {
          DEFAULT: '#C8AFA0',
          foreground: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#D9C5B2',
          foreground: '#1A1A1A',
        },
        background: '#FFFFFF',
        surface: '#F5F5F7',
        elevated: '#FAFAFB',
        card: '#FFFFFF',
        text: {
          DEFAULT: '#121212',
          muted: '#8E8E93',
          subtle: '#B6B6BC',
          inverse: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E5E5EA',
          strong: '#D1D1D6',
        },
        brand: {
          pitch: '#1A261A',
          gold: '#D6A23E',
          silver: '#A8A8A8',
          bronze: '#B07A4E',
        },
        success: {
          DEFAULT: '#22C55E',
          soft: '#DCFCE7',
        },
        warning: {
          DEFAULT: '#F59E0B',
          soft: '#FEF3C7',
        },
        danger: {
          DEFAULT: '#EF4444',
          soft: '#FEE2E2',
        },
        info: {
          DEFAULT: '#3B82F6',
          soft: '#DBEAFE',
        },
        muted: {
          DEFAULT: '#F1F1F4',
          foreground: '#6B7280',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        foreground: '#121212',
        'primary-foreground': '#FFFFFF',
        'secondary-foreground': '#1A1A1A',
        'accent-foreground': '#1A1A1A',
        'muted-foreground': '#6B7280',
        'card-foreground': '#121212',
        'destructive-foreground': '#FFFFFF',
        ring: '#B49372',
        hairline: hairlineWidth(),
      },
      fontSize: {
        display: ['28px', { lineHeight: '34px', fontWeight: '800' }],
        h1: ['24px', { lineHeight: '30px', fontWeight: '800' }],
        h2: ['20px', { lineHeight: '26px', fontWeight: '700' }],
        h3: ['18px', { lineHeight: '24px', fontWeight: '700' }],
        h4: ['16px', { lineHeight: '22px', fontWeight: '600' }],
        body: ['16px', { lineHeight: '22px', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '20px', fontWeight: '500' }],
        caption: ['13px', { lineHeight: '18px', fontWeight: '400' }],
        micro: ['11px', { lineHeight: '14px', fontWeight: '500' }],
        button: ['16px', { lineHeight: '20px', fontWeight: '600' }],
      },
      spacing: {
        gutter: '20px',
        screen: '16px',
      },
      borderRadius: {
        xs: '6px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 1px rgba(15, 23, 42, 0.03)',
        floating: '0 8px 24px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
