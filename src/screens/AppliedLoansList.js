import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const AppliedLoansList = () => {
    
    const navigation=useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header/>,
    });
  }, [navigation]);
  return (
    <View>
        <View>
            <Text>Applied Loans List</Text>
             <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
        </View>
      
    </View>
  )
}

export default AppliedLoansList