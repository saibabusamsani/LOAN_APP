import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,

} from 'react-native';
import { Portal, RadioButton, useTheme } from 'react-native-paper';
import GradientButton from './GradientButton';
import { useDispatch, useSelector} from 'react-redux';
import { applyTheme, changeTheme, setThemeColor } from '../store/themeSlice';

const { height } = Dimensions.get('window');

const ThemeModel = ({ visible, onDismiss }) => {

   const themeColor = useSelector(s => s.theme.themeColor);
  const translateY = useRef(new Animated.Value(height)).current;
  const [showModal, setShowModal] = useState(visible);
  const [value, setValue] = useState(themeColor);
  const {colors}=useTheme();
  const dispatch=useDispatch();


  useEffect(() => {
    if (visible) {
      setShowModal(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setShowModal(false));
    }
  }, [visible]);

  if (!showModal) return null;

 
const themeHandle = () => {
  dispatch(applyTheme(value)); 
  onDismiss();
};

  return (
    <Portal>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View className="absolute inset-0 bg-black/40">
          <TouchableWithoutFeedback>
            <Animated.View
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-3"
              style={{ transform: [{ translateY }] }}
            >
              <View className='p-4  gap-2'>
                <View className="w-[60%] h-40 rounded-lg overflow-hidden">
                  <Image
                    source={
                      value === 'orange'
                        ? require('../assets/orangeTheme.png')
                        : require('../assets/purpleTheme.png')
                    }
                    resizeMode="contain" // or 'cover'
                    className="w-full h-full"
                  />
                </View>
                <RadioButton.Group onValueChange={(c) => setValue(c)} value={value}>
                  <View className="flex-row items-center space-x-6 mb-4 gap-5">
                    {/* Orange Option */}
                    <View className="flex-row items-center space-x-2">
                      <RadioButton
                        value="orange"
                        color={"tomato"}
                        uncheckedColor="#ccc"
                      />
                      <Text className={`text-base ${value === 'orange' ? 'text-orange-600 font-semibold' : 'text-gray-600'}`}>
                        Orange
                      </Text>
                    </View>

                    {/* Blue Option */}
                    <View className="flex-row items-center space-x-2">
                      <RadioButton
                        value="blue"
                        color="blue"
                        uncheckedColor="#ccc"
                      />
                      <Text className={`text-base ${value === 'blue' ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
                        Blue
                      </Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <GradientButton title="Save Theme" onPress={themeHandle} />

              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Portal>
  );
};

export default ThemeModel;

