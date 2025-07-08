import { View, Text, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import TransactionCard from '../../../components/TransactionCard';

const GroupList = () => {

  const navigation=useNavigation();
    const transactions = [
  {
    name: "Alice Johnson",
    refId: "REF123456",
    amount: 2500,
    purpose: "Invoice Payment",
    status: "Completed"
  },
  {
    name: "Bob Smith",
    refId: "REF789012",
    amount: 1500,
    purpose: "Subscription Fee",
    status: "Pending"
  },
  {
    name: "Clara Martinez",
    refId: "REF345678",
    amount: 3200,
    purpose: "Consulting Services",
    status: "Failed"
  },
  {
    name: "David Lee",
    refId: "REF901e234",
    amount: 2800,
    purpose: "Product Purchase",
    status: "Completed"
  },
  {
    name: "David Lee",
    refId: "REF901234",
    amount: 2800,
    purpose: "Product Purchase",
    status: "Completed"
  },
  {
    name: "David Lee",
    refId: "REF9016234",
    amount: 2800,
    purpose: "Product Purchase",
    status: "Completed"
  },
  {
    name: "Eva Singh",
    refId: "REF567890",
    amount: 4000,
    purpose: "Refund",
    status: "In Progress"
  }
];

const handleNavigate=()=>{
  navigation.navigate("GroupMemberScreen");
}

 const renderItem = useCallback(
    ({ item }) => <TransactionCard item={item}  onPress={handleNavigate}/>,
    []
  );
  return (
    <View className=' flex-1 py-5'>
            <FlatList
              data={transactions}
              keyExtractor={(item) => item.refId}
              renderItem={renderItem}
            />
          </View>
  )
}

export default GroupList