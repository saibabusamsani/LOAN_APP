import React from 'react';
import { View, Text, Image } from 'react-native';
import { IconButton, MD3Colors, useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const InceptionHeader = () => {

  const {colors}=useTheme();
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[colors.surface,colors.surface_secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View className="flex-row items-center justify-between px-3 py-1">


        <View className='flex-row justify-center items-center'>
            <IconButton
            icon="menu"
            iconColor={colors.primary}
            size={35}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <Text className='font-inter-bold tracking-widest  text-lg text-primary'>Inception</Text>
        </View>

      

        <IconButton
          icon="plus"
          iconColor={colors.primary}
          size={35}
          onPress={() => navigation.navigate("FieldReport")}
        />

      </View>
    </LinearGradient>
  );
};

export default InceptionHeader;
