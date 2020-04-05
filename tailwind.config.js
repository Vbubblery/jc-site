/* eslint-disable @typescript-eslint/no-var-requires */

const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    important: true,
    colors: {
      ...colors,
      black: '#2d3748',
      primary: 'var(--color-primary)',
      'primary-variant': 'var(--color-primary-variant)',
      secondary: 'var(--color-secondary)',
      'secondary-variant': 'var(--color-secondary-variant)',
      background: 'var(--color-background)',
      surface: 'var(--color-surface)',
      error: 'var(--color-error)',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
