
import React from 'react';
import { View, Text,ScrollView } from 'react-native';
 
const IndividualDetailes=()=>{

  const Row = ({ label, value }) => (
  <View className="flex-row justify-between mb-1">
    <Text className="text-sm font-bold text-gray-700 w-1/2">{label} </Text>
    <Text className="text-sm text-black w-1/2 text-right">{value}</Text>
  </View>
);
  return (
    <ScrollView className="flex-1 bg-[#F3E5F5] px-4 pt-8">
 
      {/* Section: Details */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow border border-purple-700">
        <Text className="text-base font-semibold mb-2 text-gray-700">Details</Text>
 
        <Row label="Name" value="Maya" />
        <Row label="Reference ID" value="464278575" />
        <Row label="SHG ID" value="SHG342432" />
        <Row label="Purpose" value="Textile business" />
        <Row label="Amount" value="1,00,000/-" />
        <Row label="Mobile No" value="8888888888" />
        <Row label="Create date" value="12/05/2025" />
      </View>
 
      {/* Section: Approval Details */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow border border-purple-700">
        <Text className="text-base font-semibold mb-2 text-gray-700">Approval Details</Text>
 
        <Row label="Approved by MD" value="13 May 2025" />
        <Row label="Sanction date" value="464278575" />
        <Row label="Sanction amount" value="SHG342432" />
        <Row label="Disbursed on" value="Textile business" />
      </View>
 
      {/* Section: EMI Details */}
      <View className="bg-white rounded-xl p-4 mb-8 shadow border border-purple-700">
        <Text className="text-base font-semibold mb-2 text-gray-700">EMI Details</Text>
 
        <Row label="EMI start date" value="1 June 2025" />
        <Row label="EMI amount" value="4500/-" />
        <Row label="Duration" value="12 months" />
        <Row label="EMI end date" value="1 May 2026" />
        <Row label="Intrest" value="1 June 2025" />
        <Row label="Total amount" value="4500/-" />
      </View>
 
    </ScrollView>
  );
}
 
export default IndividualDetailes;
 
 