import React, { useEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { requestPermissions } from '../utils/PermissionHelper';
import { useTheme } from 'react-native-paper';

const SplashScreen=()=>{


  const {colors}=useTheme();

   useEffect(() => {
    const initApp = async () => {
      const permissionGranted = await requestPermissions();

      if (permissionGranted) {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    };

    initApp();
  }, []);

  return (
    <View className="flex-1 items-center justify-center relative">
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      
      <View className="absolute inset-0 bg-primary opacity-95" />

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
