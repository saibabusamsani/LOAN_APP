/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary:        'var(--color-primary)',
        'primary-text': 'var(--color-primaryText)',
        secondary:      'var(--color-secondary)',
        'secondary-text':'var(--color-secondaryText)',
        background:     'var(--color-background)',
        surface:        'var(--color-surface)',
        'surface-secondary': 'var(--color-surface_secondary)',
        'surface-tertiary':  'var(--color-surface_teritary)',
        text:           'var(--color-text)',
        'text-secondary':'var(--color-textSecondary)',
        'text-third':   'var(--color-text_third)',
        border:         'var(--color-border)',
        'border-secondary':'var(--color-border_secondary)',
        'border-third':'var(--color-border_third)',
        danger:         'var(--color-danger)',
        success:        'var(--color-success)',
        warning:        'var(--color-warning)',
      },
    },
  },
  plugins: [],
};
