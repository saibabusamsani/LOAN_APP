import React, { Suspense, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions} from '@react-navigation/native';
import ThemeModel from './ThemeModel';
import LogoutModel from './LogoutModel';
import { DrawerItem } from '@react-navigation/drawer';

const DrawerMenu = ({navigation,state}) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();


  const [uiState, setUiState] = useState({
    openThemeModel: false,
    openLogoutModel: false,
  });

  const toggleModal = (modalKey, value) => {
    setUiState(
      (prev)=>{  
        // All keys are setting to FALSE   
      const resetModels=Object.keys(prev).reduce((acc,key)=>{
        acc[key]=false;
        return acc;
      },{});
    //  Assign latest model
      resetModels[modalKey]=value;

      return resetModels;
    }
  );

  };

const handleThemeOpen = () => {
  toggleModal('openThemeModel', true); 

  if (navigation?.getParent()) {
    navigation.dispatch(DrawerActions.closeDrawer());
  }
};

  const handleLogoutOpen = () => {
    toggleModal('openLogoutModel', true);

    if (navigation?.getParent()) {
      navigation.dispatch(DrawerActions.closeDrawer());
    }
  };

  const handleNavigate=(route)=>{
      navigation.navigate(route);
  }

  return (
    <>
      <LinearGradient
        colors={[colors.surface_teritary, colors.surface_teritary]}
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
        {/* PROFILE INFORMATION */}
        <View className="h-[15%] justify-center items-center border-b">
          <Text className="font-bold">Profile Data</Text>
        </View>

        <ScrollView className='h-[20%] gap-2 py-2' showsVerticalScrollIndicator={false}>
          
          <DrawerItem
            label="Home"
            icon={({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            )}
            style={{
              borderRadius: 10,
              marginHorizontal: 8,
            }}
            labelStyle={{
              fontSize: 16,
              fontWeight: '500',
              color: 'gray',
            }}
            focused={state?.routeNames[state?.index] === 'Home'}
            onPress={() => {
              navigation.navigate('Home');
            
            }}
          />
          <DrawerItem
            label="Inception"
            icon={({ color, size }) => (
              <Feather name="list" size={size} color={color} />
            )}
            style={{
              borderRadius: 10,
              marginHorizontal: 8,
            }}
            labelStyle={{
              fontSize: 16,
              fontWeight: '500',
              color: 'gray',
            }}
            focused={state?.routeNames[state?.index] === 'InceptionNavigator'}
            onPress={() => {
              navigation.navigate('InceptionNavigator');
            
            }}
          />


        </ScrollView>

        {/* APP SETTINGS */}
        <View className="h-[20%] border-t border-b border-gray-400">
          <View className="border-b border-y-gray-500 p-3">
            <Text className="text-gray-500 text-md font-inter-medium tracking-wide">
              APP SETTINGS
            </Text>
          </View>
            {/* THEME */}
          <View className="p-4">
            <TouchableOpacity className="flex-row items-center gap-2" onPress={handleThemeOpen}>
              <MaterialIcons name="contrast" size={24} color="gray" />
              <Text className="text-text-third font-inter-medium text-md tracking-wide">
                App Theme
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LOGOUT */}
        <View className="h-[10%] justify-center items-center">
          <TouchableOpacity className="flex-row items-center gap-2" onPress={handleLogoutOpen}>
            <Feather name="log-out" size={20} color="gray" />
            <Text className="text-text-third text-md font-inter-medium">Logout</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

     
     
        {uiState.openThemeModel && (
          <ThemeModel
            visible={uiState.openThemeModel}
            onDismiss={() => toggleModal('openThemeModel', false)}
          />
        )}

       
          <LogoutModel
            visible={uiState.openLogoutModel}
            onDismiss={() => toggleModal('openLogoutModel', false)}
          />
       
    </>
  );
};

export default DrawerMenu;
