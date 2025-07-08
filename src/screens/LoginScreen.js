import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, Alert } from 'react-native';


export default function LoginScreen() {
  const [formData, setFormData] = useState({ mobile: '', role: null });
  const [error, setError] = useState('');

  const roles = [
    { label: 'VOA', value: 'VOA' },
    { label: 'MS', value: 'MS' },
    { label: 'CC', value: 'CC' },
  ];

  const handleGetOtp = () => {
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    if (!formData.role) {
      Alert.alert('Error', 'Please select a role');
      return;
    }

    setError('');
    Alert.alert('OTP Sent', `OTP will be sent to ${formData.mobile} with role ${formData.role}`);
  };

  return (
    <View className="flex-1 bg-[#800080]">
      <StatusBar barStyle="light-content" backgroundColor="#800080" />

      <View className="flex-1 justify-center items-center px-6">
        <Image
          source={require('../assets/jeevika-logo.png')}
          className="w-24 h-24 mb-3 rounded-full border-2 border-white"
          resizeMode="contain"
        />

        <Text className="text-white text-xl font-bold">JEEVIKA</Text>
        <Text className="text-white text-sm text-center font-semibold mt-1">
          SOCIETY FOR ELIMINATION OF RURAL POVERTY{"\n"}Government of BIHAR
        </Text>

        <View className="bg-white rounded-xl w-full mt-8 p-5 space-y-4 shadow-md">
          <Text className="text-center text-black text-base font-semibold">LOGIN</Text>


          <TextInput
            placeholder="Enter Mobile No"
            keyboardType="numeric"
            maxLength={10}
            value={formData.mobile}
            onChangeText={text => setFormData(prev => ({ ...prev, mobile: text }))}
            className="border border-purple-700 rounded px-4 py-2 text-black"
            placeholderTextColor="#999"
          />

          {error ? (
            <Text className="text-red-600 text-sm -mt-2">{error}</Text>
          ) : null}

          <TouchableOpacity
            className="bg-purple-700 py-3 rounded mt-4"
            onPress={handleGetOtp}
          >
            <Text className="text-center text-white font-semibold">GET OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
