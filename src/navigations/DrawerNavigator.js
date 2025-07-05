import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import DrawerMenu from '../components/DrawerMenu';
import { w } from '../styles/responsive';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  const {colors}=useTheme();
  return (
    <Drawer.Navigator 
      initialRouteName="Home"   
      screenOptions={{ headerShown: false ,drawerStyle:{width:w(60),backgroundColor:"transparent"}}} 
      drawerContent={props => <DrawerMenu {...props} />}>

      <Drawer.Screen name="Home" component={HomeStackNavigator} />

    </Drawer.Navigator>

  );
}
