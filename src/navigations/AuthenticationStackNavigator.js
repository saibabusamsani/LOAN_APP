import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/authentication/LoginScreen';
import OtpVerifcation from '../screens/authentication/OtpVerifcation';

const Stack = createStackNavigator();

const AuthenticationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerifcation} />
    </Stack.Navigator>
  );
};

export default AuthenticationStackNavigator;
