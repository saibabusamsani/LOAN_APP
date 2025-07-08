import React, { useState } from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ThemeModel from './ThemeModel';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const DrawerMenu = ()=>{
  const insets = useSafeAreaInsets();
  const {colors}=useTheme();
  const navigation = useNavigation();

  const [openThemeModel,setOpenThemeModel]=useState(false);


const themeHandle = () => {
  setTimeout(() => {
    setOpenThemeModel(true);       
  }, 250); 

  if (navigation?.getParent()) {
    navigation.dispatch(DrawerActions.closeDrawer());
  }
};


  return (
    <>
    <LinearGradient
      colors={[colors.surface_teritary,colors.surface_teritary]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      className="flex-1 rounded-tr-2xl rounded-br-2xl overflow-hidden"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {/* PROFILE INFORMATION*/}
     <View className="flex-[2] justify-center items-center">
        <Text className='font-bold'>Profile Data</Text>
     </View>
    
    {/* APP SETTINGS */}
    <View className="flex-[5]  border-t border-b border-gray-400">
        <View className='border-b border-y-gray-500 p-3'>
            <Text className='text-gray-500 text-md font-inter-medium tracking-wide'>APP SETTINGS</Text>
        </View>

        <View className='p-4'>
            <TouchableOpacity className="flex-row items-center gap-2" onPress={themeHandle}>
                <MaterialIcons name="contrast" size={24} color="gray" />
                <Text className=" text-text-third  font-inter-medium text-md tracking-wide">App Theme</Text>
            </TouchableOpacity>
        </View>
    </View>

    {/* LOGOUT */}
    <View className="flex-[1] justify-center items-center">
        <TouchableOpacity className="flex-row items-center gap-2" >
            <Feather name="log-out" size={20} color="gray" />
            <Text className="text-text-third text-md font-inter-medium">Logout</Text>
    </TouchableOpacity>
    </View>

    </LinearGradient>

      {
        openThemeModel&&<ThemeModel visible={openThemeModel} onDismiss={()=>setOpenThemeModel(false)} />
      }
    </>
  );
};
export default DrawerMenu;
