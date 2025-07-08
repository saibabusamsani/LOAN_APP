import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoanSummary from '../screens/loansummary/LoanSummary';
import GroupLoanTabs from './GroupLoanTabs';
import GroupMemberScreen from '../screens/loansummary/groups/GroupMemberScreen';
import IndividualDetailes from '../screens/loansummary/IndividualDetailes';
import IndividualLoanList from '../screens/loansummary/IndividualLoansList';
import Header from '../components/Header';


const Stack = createNativeStackNavigator();

const LoanSummaryNavigator=()=>{
  return (
    <Stack.Navigator screenOptions={{header:()=><Header/>}}>
      <Stack.Screen name="LoanSummaryHome" component={LoanSummary} />
      <Stack.Screen name="IndividualLoanList" component={IndividualLoanList} />
      <Stack.Screen name="IndividualLoanDetailes" component={IndividualDetailes} />
      <Stack.Screen name="GroupLoan" component={GroupLoanTabs}/>
      <Stack.Screen name="GroupMemberScreen" component={GroupMemberScreen}/>
    </Stack.Navigator>
  );
};
export default LoanSummaryNavigator;
