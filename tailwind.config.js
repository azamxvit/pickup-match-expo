import type { Config } from 'tailwindcss';
const { hairlineWidth } = require('nativewind/theme');

export default {
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
        },
        secondary: '#C8AFA0',
        accent: '#D9C5B2',
        background: '#FFFFFF',
        surface: '#F5F5F7',
        text: {
          DEFAULT: '#121212',
          muted: '#8E8E93',
        },
        border: hairlineWidth(),
      },
      fontSize: {
        'h1': ['24px', { lineHeight: '28px', fontWeight: '700' }],
        'h2': ['20px', { lineHeight: '24px', fontWeight: '600' }],
        'h3': ['18px', { lineHeight: '22px', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '20px', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '18px', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '20px', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
} satisfies Config;