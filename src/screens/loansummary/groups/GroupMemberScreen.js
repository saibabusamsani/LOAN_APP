import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GroupMemberScreen = () => {
  
  const navigation=useNavigation();
  return (
    <View className='flex-1 p-3 gap-5'>
      <View className='bg-primary p-2 w-[90%] rounded-md px-4'>
        <Text className='text-white font-inter-bold'>LOAN DETAILS</Text>
      </View>
      <View className='items-center justify-center gap-2 bg-surface p-4 border border-border h-[70%]'>
        <Image source={require("../../../assets/profile.png")} className='h-[30%] w-[50%] rounded-lg' />
        <View className='h-[60%] w-[100%] p-3 gap-3'>
          <View className='flex-row mb-2'>
            <Text className='w-[40%] font-inter-semibold tracking-wider'>Local Id</Text>
            <Text className='w-[70%] font-inter-light'>LO1445456</Text>
          </View>

          <View className='flex-row mb-2'>
            <Text className='w-[40%] font-inter-semibold tracking-wider'>Name</Text>
            <Text className='w-[70%] font-inter-light'>John Doe</Text>
          </View>

          <View className='flex-row mb-2'>
            <Text className='w-[40%] font-inter-semibold tracking-wider'>Group Name</Text>
            <Text className='w-[70%] font-inter-light'>Alpha Group</Text>
          </View>

          <View className='flex-row mb-2'>
            <Text className='w-[40%] font-inter-semibold tracking-wider'>Group Id</Text>
            <Text className='w-[70%] font-inter-light'>GRP-78945</Text>
          </View>

          <View className='flex-row mb-2'>
            <Text className='w-[40%] font-inter-semibold tracking-wider'>Mobile</Text>
            <Text className='w-[70%] font-inter-light'>+91 98765 43210</Text>
          </View>

          <View className='flex-row mb-2'>
            <Text className='w-[40%] font-inter-semibold tracking-wider'>Address</Text>
            <Text className='w-[70%] font-inter-light'>123, Park Lane, Hyderabad</Text>
          </View>
        </View>

      </View>
      <View className='self-end bg-red-500'>
         <TouchableOpacity activeOpacity={0.8} className="flex-row items-center rounded-md px-4 py-2 bg-primary" onPress={()=>navigation.navigate("HomeScreen")}>
                  <Text className="text-white text-base font-medium mr-2">Go to home</Text>
                  <Ionicons name="arrow-undo" size={20} color="#ffffff" />
                </TouchableOpacity>
      </View>

    </View>
  )
}

export default GroupMemberScreen