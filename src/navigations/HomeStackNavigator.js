import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoanApply from '../screens/LoanApply';
import LoanSummaryNavigator from './LoanSummaryNavigator';
import AppliedLoanListNavigator from './AppliedLoanListNavigator';
import Header from '../components/Header';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      <Stack.Screen name="LoanApply" component={LoanApply}   options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,header:()=><Header/>,headerShown:true}}/>
      <Stack.Screen name="AppliedLoansListNavigator" component={AppliedLoanListNavigator}  />
      <Stack.Screen name="LoanSummary" component={LoanSummaryNavigator} />
    </Stack.Navigator>
  );
}
