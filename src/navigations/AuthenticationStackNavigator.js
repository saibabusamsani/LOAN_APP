import React from 'react';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../screens/authentication/LoginScreen';
import OtpVerifcation from '../screens/authentication/OtpVerifcation';
import SuccessScreen from '../screens/authentication/SuccessScreen';

const Stack = createStackNavigator();

const AuthenticationStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, 
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerifcation} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationStackNavigator;
