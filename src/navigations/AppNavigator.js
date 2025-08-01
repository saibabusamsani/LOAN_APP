import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import AuthenticationStackNavigator from './AuthenticationStackNavigator';
import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  const {colors}=useTheme();

  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <StatusBar barStyle="light-content"  backgroundColor={colors.primary}/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
             <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="MainActivity" component={DrawerNavigator} />
            <Stack.Screen name="Authentication" component={AuthenticationStackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>

        <Toast />
    </SafeAreaView>
  );
    
};

export default AppNavigator;
