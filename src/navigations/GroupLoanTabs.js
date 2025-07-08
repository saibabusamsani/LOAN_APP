import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupList     from '../screens/loansummary/groups/GroupList';
import GroupDetails  from '../screens/loansummary/groups/GroupDetails';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export default function GroupLoanTopTabs() {

  const navigation=useNavigation();
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
      <Tab.Screen name="GroupDetails" component={GroupDetails} />
      <Tab.Screen name="Group Members" component={GroupList} />
    </Tab.Navigator>

  );
}
