import React from 'react';
import { View, Image, Text, StatusBar } from 'react-native';

const SplashScreen=()=>{
  return (
    <View className="flex-1 items-center justify-center bg-green-500 relative">
      <StatusBar backgroundColor="rgb(50, 209, 93)" barStyle="light-content" />
      
      <View className="absolute inset-0 bg-green-500 opacity-95" />

      <Image
        source={require('../assets/jeevika-logo.png')}
        className="w-36 h-36 mb-5"
        resizeMode="contain"
      />

      <Text className="text-white text-2xl font-inter-bold tracking-wider">JEEVIKA NIDDHI</Text>

      <Text className="text-white text-sm mt-2 text-center font-inter-medium">
        SOCIETY FOR ELIMINATION OF RURAL POVERTY
      </Text>

      <Text className="text-white text-sm mt-1 text-center font-inter-light">
        Government of Bihar
      </Text>
    </View>
  );
};
export default SplashScreen;
