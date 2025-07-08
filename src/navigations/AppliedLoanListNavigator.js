import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppliedLoansList from '../screens/appliedLoanList/AppliedLoansList';
import LoanDetailes from '../screens/appliedLoanList/LoanDetailes';
import Header from '../components/Header';
import LoanTracker from '../screens/appliedLoanList/TrackLoan';


const Stack = createNativeStackNavigator();

const AppliedLoanListNavigator=()=>{
  return (
    <Stack.Navigator screenOptions={{header:()=><Header/>}}>
       <Stack.Screen name="AppliedLoansList" component={AppliedLoansList} />
       <Stack.Screen name="LoanDetailes" component={LoanDetailes} />
       <Stack.Screen name="LoanTracker" component={LoanTracker} />

    </Stack.Navigator>
  );
};
export default AppliedLoanListNavigator;
