import React from 'react';
import { View, Text, Image } from 'react-native';
import { IconButton,useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

  const {colors}=useTheme();
  const navigation=useNavigation();
  return (
    <LinearGradient
      colors={[colors.surface,colors.surface_secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <SafeAreaView
        edges={['top']}
        className="flex-row items-center justify-between px-2 py-2"
      >

        <View className='flex-row'>
          <IconButton
            icon="arrow-left"
            size={24}
            iconColor={colors.primary}
            accessibilityLabel="Go back"
            onPress={()=>navigation.goBack()}
          />
          <View className='flex-row justify-center items-center gap-1 ml-10'>
              <Image
                source={require('../assets/logo.png')}
                className="w-15 h-15"
                resizeMode="contain"
              />

            <View className="flex-row space-x-1">
              <Text className="font-bold text-text-secondary text-lg">JEEV</Text>
              <Text className="text-text font-bold text-lg">I</Text>
              <Text className="text-text-secondary font-bold text-lg">K NIDDHI</Text>
            </View>

          </View>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;
