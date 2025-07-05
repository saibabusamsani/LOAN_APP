import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import "./global.css";
import DrawerNavigator from './navigations/DrawerNavigator';

export default function App() {
  return (
        <NavigationContainer>
         <DrawerNavigator/>
        </NavigationContainer>
  );
}
