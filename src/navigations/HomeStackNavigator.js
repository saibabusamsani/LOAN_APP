import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoanApply from '../screens/LoanApply';
import LoanSummaryNavigator from './LoanSummaryNavigator';
import AppliedLoanListNavigator from './AppliedLoanListNavigator';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      <Stack.Screen name="LoanApply" component={LoanApply} />
      <Stack.Screen name="AppliedLoansListNavigator" component={AppliedLoanListNavigator} />
      <Stack.Screen name="LoanSummary" component={LoanSummaryNavigator} />
    </Stack.Navigator>
  );
}
