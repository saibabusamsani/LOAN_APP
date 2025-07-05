import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoanApply from '../screens/LoanApply';
import AppliedLoansList from '../screens/AppliedLoansList';
import LoanSummary from '../screens/LoanSummary';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoanApply" component={LoanApply} />
      <Stack.Screen name="AppliedLoansList" component={AppliedLoansList} />
      <Stack.Screen name="LoanSummary" component={LoanSummary} />
    </Stack.Navigator>
  );
}
