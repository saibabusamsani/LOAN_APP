// tailwind.config.js
const { lightColors, darkColors } = require('./src/themes/colors');

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',                    
  theme: {
    extend: {
      colors: {
        /* ---------- core brand ---------- */
        primary:        lightColors.primary,
        'primary-dark': darkColors.primary,

        secondary:        lightColors.secondary,
        'secondary-dark': darkColors.secondary,

        /* ---------- neutrals ---------- */
        background:        lightColors.background,
        'background-dark': darkColors.background,

        surface:        lightColors.surface,
        'surface-dark': darkColors.surface,

        'surface-secondary':lightColors.surfaceSecondary,
        "success-secondary-dark":darkColors.surfaceSecondary,

        text:        lightColors.text,
        'text-dark': darkColors.text,

        'text-secondary':        lightColors.textSecondary,
        'text-secondary-dark':   darkColors.textSecondary,

        border:        lightColors.border,
        'border-dark': darkColors.border,

        /* ---------- semantic state ---------- */
        danger:        lightColors.danger,
        'danger-dark': darkColors.danger,

        success:        lightColors.success,
        'success-dark': darkColors.success,

        warning:        lightColors.warning,
        'warning-dark': darkColors.warning,
      },
    },
  },
};
