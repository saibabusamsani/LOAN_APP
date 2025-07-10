import { View, Text} from 'react-native'
import React, {useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {TextInput, useTheme} from 'react-native-paper';
import { layoutStyle } from '../styles/layout';
import { InputTheme } from '../themes/inputTheme';
import GradientButton from '../components/GradientButton';
import ErrorText from '../components/ErrorText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { h } from '../styles/responsive';
import Snackbar from 'react-native-snackbar';

const LoanApply = () => {

  const inputTheme=InputTheme();
  const {colors}=useTheme();

  const [formData,setFormData]=useState({
      name:"",
      referenceId:"",
      shgId:"",
      purpose:"",
      mobile:"",
      amount:""
  });

  const [errors,setErrors]=useState({});

  console.log("form data : ",formData);



  const onChangeHandle=(key)=>(value)=>{
    setFormData((prev)=>{
      return{
        ...prev,
        [key]:value
      }
    })
  };


const validateForm = (data) => {
  const errors = {};

  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.referenceId.trim()) errors.referenceId = "Reference ID is required.";
  if (!data.shgId.trim()) errors.shgId = "SHG ID is required.";
  if (!data.purpose.trim()) errors.purpose = "Purpose is required.";
  if (!/^\d{10}$/.test(data.mobile)) errors.mobile = "Enter valid 10-digit mobile.";
  if (!data.amount.trim()) errors.amount = "Amount is required.";

  return errors;
};
const isFormValid = Object.keys(validateForm(formData)).length === 0;

const handleSubmit = () => {
  const errors = validateForm(formData);
  setErrors(errors);
  if (Object.keys(errors).length === 0) {
    
    console.log("Submit:", formData);
      Snackbar.show({
                text: 'Applied Loan Succesfully',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.success
              });
  }
};

  const handleReset=()=>{
    
    const reset = (data) => {
      return (
        Object.keys(data).reduce((acc, key) => {
          acc[key] = "";
          return acc;
        }, {})
      )
    }
  setFormData(reset(formData));
  setErrors(reset(errors));

  }
  


  return (
    <SafeAreaView edges={[]} >

      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={h(7)}
      >
        <View className='items-center mt-10 gap-3'>
          <Text className='text-text font-extrabold tracking-widest  underline decoration-primary'>Loan Registration</Text>

          <View className='flex-1 bg-surface justify-center items-center gap-2 p-3 rounded-md ' style={layoutStyle.form}>

            {/* NAME */}
            <View className="flex-row gap-5 justify-between items-center  w-full">
              <Text className="text-text font-inter-medium text-sm">NAME</Text>

              <View >
                {errors.name && <ErrorText message={errors.name} />}
                <TextInput
                  placeholder="Ex: Sai"
                  mode="outlined"
                  theme={inputTheme}
                  placeholderTextColor="#A0A0A0"
                  style={layoutStyle.input}
                  value={formData.name}
                  onChangeText={onChangeHandle("name")}
                />

              </View>
            </View>

            {/* REFERENCE ID */}
            <View className='flex-row items-center gap-5  w-full justify-between'>
              <Text className="text-text font-inter-medium text-sm">REFERENCE ID</Text>
              <View >
                {errors.referenceId && <ErrorText message={errors.referenceId} />}
                <TextInput
                  placeholder="Ex: 4202"
                  mode="outlined"
                  theme={inputTheme}
                  placeholderTextColor="#A0A0A0"
                  style={layoutStyle.input}
                  value={formData.referenceId}
                  onChangeText={onChangeHandle("referenceId")}
                />
              </View>
            </View>
            {/*SHG ID*/}
            <View className='flex-row items-center gap-5  w-full justify-between'>
              <Text className="text-text font-inter-medium text-sm">SHG ID</Text>
              <View >
                {errors.shgId && <ErrorText message={errors.shgId} />}
                <TextInput
                  placeholder="Ex: 4344"
                  mode="outlined"
                  theme={inputTheme}
                  placeholderTextColor="#A0A0A0"
                  style={layoutStyle.input}
                  value={formData.shgId}
                  onChangeText={onChangeHandle("shgId")}
                />
              </View>
            </View>

            {/*PURPOSE */}
            <View className='flex-row items-center gap-5  w-full justify-between'>
              <Text className="text-text font-inter-medium text-sm">Purpose</Text>
              <View >
                {errors.purpose && <ErrorText message={errors.purpose} />}
                <TextInput
                  placeholder="Ex: Hello world"
                  mode="outlined"
                  theme={inputTheme}
                  placeholderTextColor="#A0A0A0"
                  style={layoutStyle.input}
                  value={formData.purpose}
                  onChangeText={onChangeHandle("purpose")}
                />
              </View>
            </View>

            {/* MOBILE NUMBER */}
            <View className='flex-row items-center gap-5  w-full justify-between'>

              <Text className="text-text font-inter-medium text-sm">Mobile No.</Text>
              <View >
                {errors.mobile && <ErrorText message={errors.mobile} />}
                <TextInput
                  placeholder="Ex: 876544455"
                  keyboardType="numeric"
                  maxLength={10}
                  mode="outlined"
                  theme={inputTheme}
                  placeholderTextColor="#A0A0A0"
                  style={layoutStyle.input}
                  value={formData.mobile}
                  onChangeText={onChangeHandle("mobile")}

                />
              </View>
            </View>

            {/* AMOUNT */}
            <View className='flex-row items-center gap-5  w-full justify-between'>

              <Text className="text-text font-inter-medium text-sm">AMOUNT</Text>
              <View >
                {errors.amount && <ErrorText message={errors.amount} />}
                <TextInput
                  placeholder="Ex: 25,000"
                  mode="outlined"
                  theme={inputTheme}
                  placeholderTextColor="#A0A0A0"
                  style={layoutStyle.input}
                  value={formData.amount}
                  onChangeText={onChangeHandle("amount")}
                />
              </View>
            </View>

            <View className='flex-row gap-4 mt-5'>
              <GradientButton title='Submit' onPress={handleSubmit} enable={isFormValid} />
              <GradientButton title='Reset' onPress={handleReset} />
            </View>
          </View>

        </View>
      </KeyboardAwareScrollView>

    </SafeAreaView>
  )
}

export default LoanApply;

