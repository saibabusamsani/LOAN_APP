import { MD3LightTheme } from 'react-native-paper';
import { orangeThemeColors, blueThemeColors } from './colors';


export const orangeTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...orangeThemeColors,
  },
};


export const blueTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...blueThemeColors,
  },
};
