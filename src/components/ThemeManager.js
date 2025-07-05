import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme, vars } from 'nativewind';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { orangeTheme, blueTheme } from '../themes/appThemes';
import { orangeThemeColors, blueThemeColors } from '../themes/colors';
import { applyTheme } from '../store/themeSlice';

export default function ThemeManager({ children }) {
  const dispatch = useDispatch();
  const { themeColor, isThemeLoaded } = useSelector((s) => s.theme);
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    dispatch(applyTheme());
  }, []);


  useEffect(() => {
    setColorScheme(themeColor);
  }, [themeColor]);

 
  if (!isThemeLoaded) return null;

  const activeColors =
    themeColor === 'orange' ? orangeThemeColors : blueThemeColors;

  const cssVars = vars(
    Object.entries(activeColors).reduce((acc, [key, value]) => {
      acc[`--color-${key}`] = value;
      return acc;
    }, {})
  );

  const paperTheme = themeColor === 'orange' ? orangeTheme : blueTheme;

  return (
    <PaperProvider
      theme={paperTheme}
      settings={{ icon: (props) => <MaterialCommunityIcons {...props} /> }}
    >
      <View style={cssVars} className="flex-1">
        {children}
      </View>
    </PaperProvider>
  );
}
