import { View, Text, FlatList, StyleSheet ,TouchableOpacity} from 'react-native'
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import { Button, useTheme,TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import TransactionCard from '../../components/TransactionCard';
import { h, s, w } from '../../styles/responsive';

const IndividualLoanList = () => {

  const navigation=useNavigation();
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);
   const { colors } = useTheme();
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


const handleSearchToggle = () => {
  setShowSearch(true);
  setTimeout(() => {
    inputRef.current?.focus();
  }, 100); // optional slight delay for smoother UX
};

const handleCancel = () => {
  inputRef.current?.blur();
  setShowSearch(false);
};

  const handleNavigate=()=>{
    navigation.navigate("IndividualLoanDetailes");
  }


  const renderItem = useCallback(
    ({ item }) => <TransactionCard item={item} onPress={handleNavigate}/>,
    []
  );

  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header/>,
    });
  }, [navigation]);
  return (
      <View className="flex-1 bg-surface-tertiary">
        {/* header */}
        <View className="w-[95%] self-center py-2">

          {!showSearch ? (
            <View className="flex-row bg-white justify-between items-center px-4 py-2 rounded-md w-[95%] self-center">
              <Text className="text-lg tracking-wide text-primary font-inter-semibold">
                Applied Loans List
              </Text>
              <Button
                mode="contained"
                onPress={handleSearchToggle}
                icon={({ color }) => <Icon name="magnify" size={24} color={color} />}
              >
                Search
              </Button>
            </View>
          ) : (
            <View className="w-[95%] self-center flex-row justify-center items-end bg-white rounded-md px-4 py-2">
             <Icon name="magnify" size={30} color={colors.primary} />
              <TextInput
                ref={inputRef}
                placeholder="Search loans..."
                style={styles.input}
              />
              <TouchableOpacity onPress={handleCancel} className='bg-surface p-2 rounded-md'>
                <Text className='text-danger'>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}

        </View>

        {/* list */}
        <View className="flex-1 py-5">
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.refId}
            renderItem={renderItem}
          />
        </View>
      </View>
  );
}

export default IndividualLoanList;
const styles = StyleSheet.create({
  input: {
   width:w(64),
   height:h(5),
   backgroundColor:"transparent",
   fontSize:s(1.5)
  },
});