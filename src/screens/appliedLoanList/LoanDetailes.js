import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../components/GradientButton';
import GradientBackground from '../../components/GradientBackground';
import { useTheme } from 'react-native-paper';

const LoanDetailes = () => {

  const {colors}=useTheme();
  
  const navigation=useNavigation();
  return (
    <View className='flex-1 p-3 gap-5'>
      <View className='bg-primary p-2 w-[90%] rounded-md px-4'>
        <Text className='text-white font-inter-bold'>LOAN DETAILS</Text>
      </View>

      <View className='bg-surface p-4 gap-3 rounded-md'>
        <View className='flex-row'>
          <Text className='w-[30%] font-inter-medium text-gray-700'>REF.ID</Text>
          <Text className='flex-[2] text-gray-500 text-sm font-inter'>FDS12324</Text>
        </View>
        <View className='flex-row '>
          <Text className='w-[30%] font-inter-medium text-gray-700'>Amount</Text>
          <Text className='flex-[2] text-gray-500 text-sm font-inter'>233300</Text>
        </View>
        <View className='flex-row '>
          <Text className='w-[30%] font-inter-medium text-gray-700'>Purpose</Text>
          <Text className='flex-[2] text-gray-500 text-sm font-inter'>Invoice Payment</Text>
        </View>
        <View className='flex-row '>
          <Text className='w-[30%] font-inter-medium text-gray-700'>Status</Text>
          <Text className='flex-[2] text-gray-500 text-sm font-inter'>Pending</Text>
        </View>

      </View>

      <View className='self-center'>
        <GradientButton title="Track Loan" onPress={()=>navigation.navigate("LoanTracker")}/>
      </View>
      <View className='absolute bottom-10 left-5'>
        <TouchableOpacity activeOpacity={0.8} className="flex-row items-center rounded-md px-4 py-2 overflow-hidden self-start" onPress={() => navigation.navigate("HomeScreen")}>
          <GradientBackground
          colors={[colors.primary, colors.secondary]}
          className="absolute top-0 left-0 right-0 bottom-0"
        />
          <Text className="text-white text-base font-medium mr-2">Go to home</Text>
          <Ionicons name="arrow-undo" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default LoanDetailes