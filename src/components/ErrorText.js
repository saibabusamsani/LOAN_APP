import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';

const ErrorText = ({ message}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-10)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        delay:0,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        delay:0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      <Text className='font-inter text-xs tracking-wide text-red-500'>{`* ${message}`}</Text>
    </Animated.View>
  );
};

export default ErrorText;
