import { View, Text, ScrollView,} from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {TextInput} from 'react-native-paper';
import { layoutStyle } from '../styles/layout';
import { InputTheme } from '../themes/inputTheme';
import GradientButton from '../components/GradientButton';

const LoanApply = () => {

  const navigation=useNavigation();
  const inputTheme=InputTheme();
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header/>,
    });
  }, [navigation]);
  
  return (
    <SafeAreaView edges={[]} >
          <ScrollView keyboardShouldPersistTaps="handled">
          <View className='items-center mt-10 gap-3'>
              <Text className='text-text font-extrabold tracking-widest  underline decoration-primary'>Loan Registration</Text>
              <View className='flex-1 bg-surface justify-center items-center gap-2 p-3 rounded-md ' style={layoutStyle.form}>

              {/* NAME */}
              <View className="flex-row gap-5 justify-between items-center  w-full">
                  <Text className="text-text font-inter-medium text-sm">NAME</Text>
                  <TextInput
                    placeholder="Ex: Sai"
                    mode="outlined"
                    theme={inputTheme}
                    placeholderTextColor="#A0A0A0"
                    style={layoutStyle.input}
                    
                  />
              </View>

              {/* REFERENCE ID */}
              <View className='flex-row items-center gap-5  w-full justify-between'>
                  <Text className="text-text font-inter-medium text-sm">REFERENCE ID</Text>
                      <TextInput
                          placeholder="Ex: 4202"
                          mode="outlined"
                          theme={inputTheme}
                          placeholderTextColor="#A0A0A0"
                          style={layoutStyle.input}
                        />
              </View>
              {/*SHG ID*/}
              <View className='flex-row items-center gap-5  w-full justify-between'>
                    <Text className="text-text font-inter-medium text-sm">SHG ID</Text>
                        <TextInput
                            placeholder="Ex: 4344"
                            mode="outlined"
                            theme={inputTheme}
                            placeholderTextColor="#A0A0A0"
                            style={layoutStyle.input}
                          />
              </View>

              {/*PURPOSE */}
              <View className='flex-row items-center gap-5  w-full justify-between'>
                    <Text className="text-text font-inter-medium text-sm">Purpose</Text>
                      <TextInput
                          placeholder="Ex: Hello world"
                          mode="outlined"
                          theme={inputTheme}
                          placeholderTextColor="#A0A0A0"
                          style={layoutStyle.input}
                        />
              </View>

              {/* MOBILE NUMBER */}
              <View className='flex-row items-center gap-5  w-full justify-between'>

                  <Text className="text-text font-inter-medium text-sm">Mobile No.</Text>
                      <TextInput
                          placeholder="Ex: 876544455"
                          mode="outlined"
                          theme={inputTheme}
                          placeholderTextColor="#A0A0A0"
                          style={layoutStyle.input}
                        />
              </View>

              {/* AMOUNT */}
              <View className='flex-row items-center gap-5  w-full justify-between'>

                  <Text className="text-text font-inter-medium text-sm">AMOUNT</Text>
                      <TextInput
                          placeholder="Ex: 25,000"
                          mode="outlined"
                          theme={inputTheme}
                          placeholderTextColor="#A0A0A0"
                          style={layoutStyle.input}
                        />
              </View>

              <View className='flex-row gap-4 mt-5'>
                      <GradientButton title='Submit'/>
                      <GradientButton title='Reset'/>
              </View>
              </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default LoanApply;

