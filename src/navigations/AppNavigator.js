import React, { useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import AuthenticationStackNavigator from './AuthenticationStackNavigator';
import { getSP } from '../utils/StorageHelper';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setLogout } from '../store/AuthenticationSlice';
import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  const dispatch=useDispatch();
  const {colors}=useTheme();
  const { isLoggedIn, isLoading } = useSelector(state => state.authentication);

  console.log("isLoggedIn : ",isLoggedIn,"   --> isLoading : ",isLoading)
 
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loginDetails = await getSP('pref_login_details');
      if (loginDetails) {
        dispatch(setLogin());
      } else {
        dispatch(setLogout());
      }
    };

    checkLoginStatus();
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"    
        backgroundColor={colors.primary} 
      />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="MainActivity" component={DrawerNavigator} />
        ) : (
          <Stack.Screen name="Authentication" component={AuthenticationStackNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default AppNavigator;
