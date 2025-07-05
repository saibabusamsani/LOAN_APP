import { MD3LightTheme } from 'react-native-paper';
import { orangeThemeColors } from './colors';


export const orangeTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: orangeThemeColors.primary,
    secondary: orangeThemeColors.secondary,
    surface:orangeThemeColors.surface,
    surface_secondary:orangeThemeColors.surface_secondary,
    surface_teritary:orangeThemeColors.surface_teritary,

    border:orangeThemeColors.border,
    border_secondary:orangeThemeColors.border_secondary,
    border_third:orangeThemeColors.border_third
  },
};
