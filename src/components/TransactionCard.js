import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TransactionCard = ({ item,onPress }) => {
  return (
      <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="rounded-2xl shadow-md p-4 mx-4 my-2 gap-2 border border-border-secondary bg-white"
    >
      <Text className="text-lg text-black font-inter-semibold">{item.name}</Text>
      <View className='flex-row '>
        <Text className='w-[30%] font-inter-medium text-gray-700'>REF.ID</Text>
        <Text className='flex-[2] text-gray-500 text-sm font-inter'>{item.refId}</Text>
      </View>
      <View  className='flex-row '>
        <Text className='w-[30%] font-inter-medium text-gray-700'>Amount</Text>
        <Text className='flex-[2] text-gray-500 text-sm font-inter'>{item.amount}</Text>
      </View>
      <View className='flex-row '>
        <Text className='w-[30%] font-inter-medium text-gray-700'>Purpose</Text>
        <Text className='flex-[2] text-gray-500 text-sm font-inter'>{item.purpose}</Text>
      </View>
      <View className='flex-row '>
        <Text className='w-[30%] font-inter-medium text-gray-700'>Status</Text>
        <Text className='flex-[2] text-gray-500 text-sm font-inter'>{item.status}</Text>
      </View>
     
    </TouchableOpacity>
  );
};

export default React.memo(TransactionCard);
