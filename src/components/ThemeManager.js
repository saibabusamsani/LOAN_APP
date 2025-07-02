// src/components/ThemeManager.js
import React, { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { darkTheme } from '../themes/darkTheme';
import { lightTheme } from '../themes/lightTheme';

export default function ThemeManager({ children }) {
  const darkMode = useSelector(s => s.theme.isDarkTheme); 
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <PaperProvider theme={darkMode ? darkTheme : lightTheme}>
    
      <View className={`flex-1 ${darkMode ? 'dark' : ''}`}>
        {children}
      </View>
    </PaperProvider>
  );
}
