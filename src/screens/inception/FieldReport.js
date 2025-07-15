import { View,Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import GradientButton from '../../components/GradientButton';
import { addInceptionDraft } from '../../database/repositories/InceptionDraftRepo';

const FieldReport = () => {

  const navigatation=useNavigation();
   
  const handleAddDraft = async () => {
    const staticDraft = {
      date: '2025-07-15',
      time: '10:00 AM',
      address: 'delhi',
      capturedImages: JSON.stringify(['image1.png', 'image2.png']),
      latitude: 17.385044,
      longitude: 78.486671,
    };

    try {
      await addInceptionDraft(staticDraft);

      Snackbar.show({
        duration:Snackbar.LENGTH_LONG,
        text:"Inception added successfully",
        backgroundColor:"green"
      });
      navigatation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add draft');
      console.error(error);
    }
  };

  return (
    <View className='flex-row justify-center items-center flex-1 gap-4'>
      <GradientButton title="SAVE" />
      <GradientButton title="SAVE AS DRAFT" onPress={handleAddDraft}/>
    </View>
  )
}

export default FieldReport;