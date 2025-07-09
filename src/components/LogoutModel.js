import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,

} from 'react-native';
import { IconButton, Portal,useTheme } from 'react-native-paper';
import GradientButton from './GradientButton';
import Feather from 'react-native-vector-icons/Feather';
import { removeSP } from '../utils/StorageHelper';

const { height } = Dimensions.get('window');

const LogoutModel = ({ visible, onDismiss }) => {

  const translateY = useRef(new Animated.Value(height)).current;
  const [showModal, setShowModal] = useState(visible);
  const {colors}=useTheme();



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


  const logoutHandle=async ()=>{
    await removeSP("pref_login_details");
    console.log("logout successfully")
  }

 

  return (
      <Portal>
          <TouchableWithoutFeedback onPress={onDismiss}>
              <View className="absolute inset-0 bg-black/40">
                  <TouchableWithoutFeedback>
                      <Animated.View
                          className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-3 pb-7"
                          style={{ transform: [{ translateY }] }}
                      >
                          <View className='bg-surface gap-5'>

                              <View className='flex-row items-center justify-between'>
                                  <Text className='font-inter-semibold tracking-wide'>Confirmation sign out</Text>
                                  <IconButton
                                      icon={({ size}) => (
                                          <Feather name="x" size={size} color={colors.primary} />
                                      )}
                                      iconColor="gray"
                                      size={20}
                                      onPress={onDismiss}/>
                              </View>

                              <View className='gap-3'>
                                <GradientButton title="Sign Out" onPress={logoutHandle}/>
                                <TouchableOpacity className='border rounded-md' style={{borderColor:colors.primary}} onPress={onDismiss}>
                                    <Text className='text-center p-2 text-primary font-inter-semibold text-sm' style={{color:colors.primary}}>Cancel</Text>
                                </TouchableOpacity>
                              </View>

                          </View>
                      </Animated.View>
                  </TouchableWithoutFeedback>
              </View>
          </TouchableWithoutFeedback>
      </Portal>
  );
};

export default LogoutModel;





