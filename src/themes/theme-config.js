import { vars } from 'nativewind';
import { blueThemeColors, orangeThemeColors } from './colors';

export const ThemesVariant = {
  ORANGE: 'orange',
  BLUE:   'blue',
};

export const Themes = {
  orange: vars({
    '--color-primary':           orangeThemeColors.primary,
    '--color-primaryText':       orangeThemeColors.primaryText,
    '--color-secondary':         orangeThemeColors.secondary,
    '--color-secondaryText':     orangeThemeColors.secondaryText,
    '--color-background':        orangeThemeColors.background,
    '--color-surface':           orangeThemeColors.surface,
    '--color-surface_secondary': orangeThemeColors.surface_secondary,
    '--color-surface_teritary':  orangeThemeColors.surface_teritary,
    '--color-text':              orangeThemeColors.text,
    '--color-textSecondary':     orangeThemeColors.textSecondary,
    '--color-text_third':        orangeThemeColors.text_third,
    '--color-border':            orangeThemeColors.border,
    '--color-border_secondary':  orangeThemeColors.border_secondary,
    '--color-border_third':      orangeThemeColors.border_third,
    '--color-danger':            orangeThemeColors.danger,
    '--color-success':           orangeThemeColors.success,
    '--color-warning':           orangeThemeColors.warning,
  }),
  blue: vars({
    '--color-primary':           blueThemeColors.primary,
    '--color-primaryText':       blueThemeColors.primaryText,
    '--color-secondary':         blueThemeColors.secondary,
    '--color-secondaryText':     blueThemeColors.secondaryText,
    '--color-background':        blueThemeColors.background,
    '--color-surface':           blueThemeColors.surface,
    '--color-surface_secondary': blueThemeColors.surface_secondary,
    '--color-surface_teritary':  blueThemeColors.surface_teritary,
    '--color-text':              blueThemeColors.text,
    '--color-textSecondary':     blueThemeColors.textSecondary,
    '--color-text_third':        blueThemeColors.text_third,
    '--color-border':            blueThemeColors.border,
    '--color-border_secondary':  blueThemeColors.border_secondary,
    '--color-border_third':      blueThemeColors.border_third,
    '--color-danger':            blueThemeColors.danger,
    '--color-success':           blueThemeColors.success,
    '--color-warning':           blueThemeColors.warning,
  }),
};
