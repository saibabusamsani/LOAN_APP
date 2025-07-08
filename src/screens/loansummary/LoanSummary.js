import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
const LoanSummary = () => {
  
  const navigation=useNavigation();
  const {colors}=useTheme();

  const handleNavigate=(id)=>{
      let route;
      if(id===1) route="HomeScreen";
      else if(id===2) route="IndividualLoanList";
      else route="GroupLoan";
      navigation.navigate(route);
  }
  return (
    <View className='flex-1 bg-background'>
      <View className='self-end p-2'>
        <TouchableOpacity activeOpacity={0.8} className="flex-row items-center rounded-md px-4 py-2 bg-primary" onPress={()=>handleNavigate(1)}>
          <Text className="text-white text-base font-medium mr-2">Go to home</Text>
          <Ionicons name="arrow-undo" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View className='flex-1 justify-start items-center gap-6 pt-10'>

       <TouchableOpacity className='h-[20%] w-[80%] rounded-md justify-center items-center gap-2 overflow-hidden bg-white border border-border' onPress={()=>handleNavigate(2)}>
          <Ionicons name="person-outline" size={30} color={colors.primary} />
            <Text className='font-inter-bold tracking-widest text-lg text-primary'>Individuals</Text>
       </TouchableOpacity>
       <TouchableOpacity className='h-[20%] w-[80%] rounded-md justify-center items-center gap-2 overflow-hidden bg-white border border-border' onPress={()=>handleNavigate(3)}>
          <Ionicons name="people-outline" size={30} color={colors.primary} />
            <Text className='font-inter-bold tracking-widest text-lg text-primary'>Groups</Text>
       </TouchableOpacity>

    
      </View>
    </View>
  )
}

export default LoanSummary