import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GradientButton from '../components/GradientButton';
import { Dropdown } from 'react-native-element-dropdown';
import { h } from '../styles/responsive';

const LoginScreen = () => {
  const { colors } = useTheme();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'SHG',
    mobileNumber:"", 
  });

  console.log("formData :",formData)
  const [secureText, setSecureText] = useState(true);
  const [errors, setErrors] = useState({});

 const roleOptions = [
    { label: 'SHG', value: 'SHG' },
    { label: 'OFFICER', value: 'OFFICER' },
  ];
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    let temp = {};
    temp.username = formData.username ? '' : 'Username is required';
    temp.password = formData.password ? '' : 'Password is required';
    setErrors(temp);
    return Object.values(temp).every(x => x === '');
  };

  const SFG_Login=()=>{
    return (
      <View className='gap-4'>
        {/* Username */}
        <View>
          <View className="flex-row items-center border border-primary rounded-lg px-3 bg-white" style={styles.inputBox}>
            <Feather name="user" size={20} color="gray" />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#888"
              className="flex-1 text-black ml-2"
              value={formData.username}
              onChangeText={text => handleChange('username', text)}
            />
          </View>
          {errors.username && (
            <Text className="text-red-500 text-sm mt-1">{errors.username}</Text>
          )}
        </View>

        {/* Password */}
        <View>
          <View className="flex-row items-center border border-primary rounded-lg px-3 py-2 bg-white" style={styles.inputBox}>
            <MaterialIcons name="lock-outline" size={20} color="gray" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              className="flex-1 text-black ml-2 py-0 font-inter"

              secureTextEntry={secureText}
              value={formData.password}
              onChangeText={text => handleChange('password', text)}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Feather name={secureText ? 'eye-off' : 'eye'} size={20} color="gray" />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text className="text-red-500 text-sm mt-1">{errors.password}</Text>
          )}
        </View>

        {/* Submit */}
        <View className='self-center'>
          <GradientButton title="Submit" onPress={validate} />
        </View>
      </View>
    )
  }

  const OFFICER_Login=()=>{
    return(
         <View className='gap-4'>
          <View className="flex-row items-center border border-primary rounded-lg px-3 bg-white" style={styles.inputBox}>
            <Feather name="phone" size={20} color="gray" />
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#888"
              className="flex-1 text-black ml-2"
              value={formData.username}
              onChangeText={text => handleChange('username', text)}
            />
          </View>
          <View className='self-center'>
            <GradientButton title="CONTINUE"/>
          </View>
          {errors.username && (
            <Text className="text-red-500 text-sm mt-1">{errors.username}</Text>
          )}
        </View>
    )
  }

  return (
    <View className="flex-1 bg-primary justify-center gap-5 items-center">
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Logo Section */}
      <View className="justify-center items-center px-4">
        <Image
          source={require('../assets/jeevika-logo.png')}
          className="w-24 h-24 mb-3 rounded-full border-2 border-white"
          resizeMode="contain"
        />
        <Text className="text-white text-xl font-inter-bold">JEEVIKA</Text>
        <Text className="text-white text-sm text-center font-inter-semibold mt-1">
          UNITING COMMUNITIES FOR SHARED PROGRESS{"\n"}Government of BIHAR
        </Text>
      </View>

      {/* Login Form */}
      <View className="bg-white w-[90%] p-4 gap-5 rounded-md">
        <Text className="text-center font-inter-bold text-primary tracking-widest">
          LOGIN
        </Text>

        {/* Role Dropdown */}
        <Dropdown
        style={[styles.dropdown,{borderColor:colors.primary}]}
        containerStyle={{ backgroundColor:colors.surface}}
        data={roleOptions}
        labelField="label"
        valueField="value"
        value={formData.role}
        onChange={item=>handleChange("role",item.value)}
      />
        {
          formData.role === "SHG" ? <SFG_Login /> : <OFFICER_Login />
        }
      </View>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  inputBox: {
    height: h(6),
    alignItems: 'center', 
  },
  inputText: {
    height: '100%',
    fontSize: 16,
    paddingVertical: 0, 
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    height:h(6)

  }

});
