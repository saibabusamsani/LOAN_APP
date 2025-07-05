import { MD3DarkTheme } from 'react-native-paper';
import {blueThemeColors } from './colors';

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary:blueThemeColors.primary,
    secondary: blueThemeColors.secondary,
  },
};
