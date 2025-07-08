import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import GradientBackground from '../../components/GradientBackground';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';
 
const LoanTracker = () => {

    const {colors}=useTheme();

const steps = [
  { title: 'Applied', status: 'Completed', date: '04/07/2025' },
  { title: 'Verified By VLO', status: 'Pending' },
  { title: 'Under review by BPM', status: 'Pending' },
  { title: 'Regional officer', status: 'Pending' },
  { title: 'DGM/MD sanction', status: 'Pending' },
  { title: 'Approved', status: 'Pending' },
  { title: 'Loan sanction', status: 'Pending' },
];
 
  const currentStep = steps.findIndex(s => s.status === 'Pending');
 
  return (
    <View className='flex-1 pb-4 bg-surface'>
    <ScrollView className="px-4 py-6">
      <Text className="text-xl font-bold mb-6 mt-3">Tracking Loan</Text>
      {steps.map((step, index) => {
        const isCompleted = step.status === 'Completed';
        const isCurrent = index === currentStep;
        const circleStyle = isCompleted
          ? 'border-success '
          : isCurrent 
          ? 'border-danger bg-yellow-500'
          : 'border-orange-300';
 
        return (
          <View key={index} className="flex-row items-start mb-4">
            <View className="w-6 items-center">
              <View
                className={`w-6 h-6 rounded-full border ${circleStyle} justify-center items-center`}>
                <Text className="text-xs font-bold">{index + 1}</Text>
              </View>
              {index < steps.length - 1 && (
                <View className="w-px h-6 bg-orange-300 mt-1" />
              )}
            </View>
 
            <View className="flex-1 ml-3">
              <Text className="text-sm font-inter-medium text-black">{step.title}</Text>
            </View>
 
            <View className="flex-1 items-end">
              <Text className="text-sm">
                {step.status === 'Completed' ? (
                  <Text className="text-success">Completed {step.date}</Text>
                ) : (
                  <Text className="text-danger">Pending</Text>
                )}
              </Text>
            </View>
          </View>
        );
      })}
 
    </ScrollView>

    <View className='h-[10%]'>
    <TouchableOpacity activeOpacity={0.8} className="flex-row items-center rounded-md px-4 py-2 overflow-hidden self-start ml-10 " onPress={() => navigation.navigate("HomeScreen")}>
          <GradientBackground
          colors={[colors.primary, colors.secondary]}
          className="absolute top-0 left-0 right-0 bottom-0"
        />
          <Text className="text-white text-base font-medium mr-2">Go to home</Text>
          <Ionicons name="arrow-undo" size={20} color="#ffffff" />
    </TouchableOpacity>
    </View>
    </View>
  );
};
 
export default LoanTracker;
 
 