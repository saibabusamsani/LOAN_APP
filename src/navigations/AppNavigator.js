import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/ThemUsage';
import CreateDemo from '../screens/CreateDemo';
import CreateUser from '../screens/ThailwindStyles';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateDemo" component={CreateDemo} />
      <Stack.Screen name="CreateUser" component={CreateUser} />
    </Stack.Navigator>
  );
}
