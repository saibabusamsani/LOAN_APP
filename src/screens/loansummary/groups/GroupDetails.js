import { View, Text } from 'react-native'
import React from 'react'

const GroupDetails = () => {
  return (
    <View className='flex-1 items-center mt-5'>

      <View className='w-[90%] bg-surface p-4 gap-3'>
        {/* Group Id */}
        <View className='flex-row '>
          <Text className='w-[40%] font-inter-semibold tracking-wide text-md'>Group Id</Text>
          <Text className=' w-[70%] font-inter text-sm tracking-wide'>2017/BH/AU/Abad/10434</Text>
        </View>

        {/* state name */}
        <View className='flex-row justify-center items-center '>
          <Text className='w-[40%] font-inter-semibold tracking-wide text-md'>State Name</Text>
          <Text className=' w-[60%] font-inter text-sm tracking-wide'>Andhra Pradesh</Text>
        </View>
        <View className='flex-row justify-center items-center '>
          <Text className='w-[40%] font-inter-semibold tracking-wide text-md'>District Name</Text>
          <Text className=' w-[60%] font-inter text-sm tracking-wide'>West Godavari</Text>
        </View>
        <View className='flex-row justify-center items-center '>
          <Text className='w-[40%] font-inter-semibold tracking-wide text-md'>Block Name</Text>
          <Text className=' w-[60%] font-inter text-sm tracking-wide'>Auranaglanad</Text>
        </View>
        <View className='flex-row justify-center items-center '>
          <Text className='w-[40%] font-inter-semibold tracking-wide text-md'>Grama Panchayat</Text>
          <Text className=' w-[60%] font-inter text-sm tracking-wide'>BELA-BELA</Text>
        </View>
        <View className='flex-row justify-center items-center '>
          <Text className='w-[40%] font-inter-semibold tracking-wide text-md'>SHG NAME</Text>
          <Text className=' w-[60%] font-inter text-sm tracking-wide'>ADITYA JEEVIKA SHG</Text>
        </View>
        <View className='flex-row justify-center items-center '>
          <Text className='w-[40%] font-inter-semibold tracking-wide text-md'>Date Of Formation</Text>
          <Text className=' w-[60%] font-inter text-sm tracking-wide'>10-10-2024</Text>
        </View>

    
      </View>

    </View>
  )
}

export default GroupDetails