import React from 'react';
import { View, Text, Image } from 'react-native';
import { IconButton, MD3Colors, useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const HomeHeader = () => {

  const {colors}=useTheme();
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[colors.surface,colors.surface_secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <SafeAreaView
        edges={['top']}
        className="flex-row items-center justify-between px-3 py-1"
      >

        <IconButton
          icon="menu"
          iconColor={colors.primary}
          size={35}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />

        <View className='flex-row justify-center items-center gap-2'>
            <Image
              source={require('../assets/logo.png')}
              className="w-15 h-15"
              resizeMode="contain"
            />

            <View className="flex-row space-x-1 ">
              <Text className="font-bold text-text-secondary text-lg">JEEV</Text>
              <Text className="text-text font-bold text-lg">I</Text>
              <Text className="text-text-secondary font-bold text-lg">K NIDDHI</Text>
            </View>

        </View>

        <IconButton
          icon="account-circle-outline"
          iconColor={colors.primary}
          size={35}
          onPress={() => console.log('Profile Pressed')}
        />

      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeHeader;
