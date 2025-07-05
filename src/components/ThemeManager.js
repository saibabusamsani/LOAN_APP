import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useColorScheme, vars } from 'nativewind';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { orangeTheme, blueTheme } from '../themes/appThemes';
import { orangeThemeColors, blueThemeColors } from '../themes/colors';

export default function ThemeManager({ children }) {
  const theme = useSelector(s => s.theme.themeColor); // 'orange' | 'blue'
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  const activeColors = theme === 'orange' ? orangeThemeColors : blueThemeColors;

  const cssVars = vars(
    Object.entries(activeColors).reduce((acc, [key, value]) => {
      acc[`--color-${key}`] = value;
      return acc;
    }, {})
  );

  const paperTheme = theme === 'orange' ? orangeTheme : blueTheme;

  return (
    <PaperProvider
      theme={paperTheme}
      settings={{ icon: props => <MaterialCommunityIcons {...props} /> }}
    >
      <View style={cssVars} className="flex-1">
        {children}
      </View>
    </PaperProvider>
  );
}
