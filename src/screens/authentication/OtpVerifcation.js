import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { h } from '../../styles/responsive';
import { setSP } from '../../utils/StorageHelper';



const OtpVerifcation = () => {



    const handMobileLogin = async () => {

    //  API CALL

    try {
      const loginDetails = { name: "sai", Id: 5 };
      await setSP("pref_login_details", JSON.stringify(loginDetails));
      console.log("login success", JSON.stringify(loginDetails));

    } catch (error) {
      console.log("Login error:", error);
    }
  }

  const {colors}=useTheme();
  return (
    <SafeAreaView edges={["top"]} className='flex-1 bg-primary py-5'>
    
       <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <View className='flex-1 items-center justify-center gap-7'>

            <View className='w-[90%]  gap-2'>
                <Text className='text-white font-inter-bold tracking-wider text-3xl'>Authentication required</Text>
                <View className='flex-row gap-3'>
                  <Text className='text-blue-100 font-inter-medium'>IN +9848300909</Text>
                  <Text className='text-blue-400 underline'>Change</Text>
                </View>
                <Text className='text-blue-100 font-inter-medium text-sm'>We'have sent a security code to the mobiel number above.Please enter it to complete information</Text>
            </View>

            <View className='w-[90%] gap-3'>
              <Text className='text-white font-inter-semibold tracking-wide'>Enter security code</Text>
              <TextInput    style={styles.input}/>
              <TouchableOpacity className='w-full bg-white p-3 rounded-md' onPress={handMobileLogin}>
                <Text className='font-inter-bold tracking-wider text-primary text-center'>Login</Text>
              </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                  <Text className='text-blue-400 font-inter-medium'>Resend code</Text>
                </TouchableOpacity>
            </View>

        </View>

    </SafeAreaView>
  )
}

export default OtpVerifcation;

const styles=StyleSheet.create({
    input:{
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#fff',
    height:h(5.5)

    }
})