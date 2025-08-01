import React, { useEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import { getSP } from '../utils/StorageHelper';
import { useDispatch } from 'react-redux';
import { setLogin, setLogout } from '../store/AuthenticationSlice';
import RNBootSplash from "react-native-bootsplash";
import { useNavigation } from '@react-navigation/native';

const SplashScreen=()=>{


  const {colors}=useTheme();
  const dispatch=useDispatch();
  const navigation=useNavigation();

 useEffect(() => {
  const initApp = async () => {
    const startTime = Date.now();
    const loginDetails = await getSP('pref_login_details');

    const elapsed = Date.now() - startTime;
    const minSplashTime = 2000; 
    
    if (elapsed < minSplashTime) {
      await new Promise(resolve => setTimeout(resolve, minSplashTime - elapsed));
    }
    if (loginDetails) {
      dispatch(setLogin());
      navigation.reset({ index: 0, routes: [{ name: 'MainActivity' }] });
    } else {
      dispatch(setLogout());
      navigation.reset({ index: 0, routes: [{ name: 'Authentication' }] });
    }

    RNBootSplash.hide({ fade: true });
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
