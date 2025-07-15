import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'react-native-paper';
import GroupDetails from '../screens/loansummary/groups/GroupDetails';
import InceptionDraft from '../screens/inception/InceptionDraft';


const Tab = createMaterialTopTabNavigator();

export default function InceptionTab() {

  const {colors}=useTheme();

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '600',
          letterSpacing:1,
          fontWeight:600
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'red', 
          height: 3,             
          borderRadius: 2,       
        },
        tabBarStyle: {
          backgroundColor: 'white', 
          elevation: 2,           
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#6b7280',
      }}
    >
      <Tab.Screen name="Inception" component={GroupDetails} />
      <Tab.Screen name="Inception Draft" component={InceptionDraft} />
    </Tab.Navigator>
 

  );
}
