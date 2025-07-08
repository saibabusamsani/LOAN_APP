/** @type {import('tailwindcss').Config} */
const { platformSelect } = require("nativewind/theme");
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily:{
       inter: ["InterTight-Regular"],
        'inter-bold': ["InterTight-Bold"],
        'inter-medium': ["InterTight-Medium"],
        'inter-light': ["InterTight-Light"],
        'inter-thin': ["InterTight-Thin"],
        'inter-semibold': ["InterTight-SemiBold"],
        'inter-extrabold': ["InterTight-ExtraBold"],
        'inter-black': ["InterTight-Black"],
        'inter-italic': ["InterTight-Italic"],
        'inter-bolditalic': ["InterTight-BoldItalic"],
        system: platformSelect({
          ios: 'Helvetica',
          android: 'sans-serif',
          default: 'ui-sans-serif',
        })
      },
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
