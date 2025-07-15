import React from 'react';
import InceptionTab from './InceptionTab';
import InceptionHeader from '../components/InceptionHeader';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import FieldReport from '../screens/inception/FieldReport';


const Stack = createStackNavigator();

const InceptionNavigator=()=>{
  return (
    <Stack.Navigator screenOptions={{
                                       header:()=><InceptionHeader/>,
                                      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                                      gestureEnabled: true,
                                  }}>
      <Stack.Screen name="InceptionTab" component={InceptionTab} />
      <Stack.Screen name="FieldReport" component={FieldReport} />

    </Stack.Navigator>
  );
};
export default InceptionNavigator;
