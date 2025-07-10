import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/AuthenticationSlice';

const SuccessScreen = () => {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const dispatch=useDispatch();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleContinue=()=>{
    dispatch(setLogin());
  }

  return (
    <View className="flex-1 items-center justify-center bg-surface px-6">
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }} className="mb-10">
        <View className="w-32 h-32 bg-surface-secondary items-center justify-center rounded-full">
          <Text className="text-5xl text-primary">✔</Text>
        </View>
      </Animated.View>

      <Text className="text-2xl font-bold tracking-widest text-black">Success</Text>
      <Text className="text-gray-600 mt-2 text-center font-inter-semibold">
        Your identity has been verified successfully
      </Text>

      <TouchableOpacity
        className="mt-10 bg-primary px-10 py-3 rounded-full"
        onPress={handleContinue}
       
      >
        <Text className="text-white text-base font-medium">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;
