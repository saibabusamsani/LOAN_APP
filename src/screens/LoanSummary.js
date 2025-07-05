import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';


const LoanSummary = () => {
  
  const navigation=useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header/>,
    });
  }, [navigation]);
  return (
    <View>
      <Text>LoanSummary</Text>
    </View>
  )
}

export default LoanSummary