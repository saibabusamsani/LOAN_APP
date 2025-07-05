import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import { layoutStyle } from '../styles/layout';
import { useTheme } from 'react-native-paper';

const HomeScreen = () => {

const navigation=useNavigation();
const { colors } = useTheme(); 

console.log("all colots : ",colors)
const items = [
  {
    type: "Apply Loans",
    icon: require("../assets/signing.png"),
    bubbleColor:"bg-green-50",
    textColor:"text-green-400",
    border:"border-green-300"

  },
  {
    type: "Applied Loans",
    icon: require("../assets/completed-task.png"),
     bubbleColor:"bg-red-50",
     textColor:"text-red-400",
      border:"border-red-300"
  },
  {
    type: "Loans Summary",
    icon: require("../assets/agreement.png"),
     bubbleColor:"bg-sky-50",
     textColor:"text-sky-400",
      border:"border-sky-300"
  },
];

const handle=(id)=>{
  let route;
  switch(id)
  {
    case 0:
      route="LoanApply";
      break;
     default:              
      route = 'LoanApply';
  };
   navigation.navigate(route);

}


useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <HomeScreenHeader />,
    });
  }, [navigation]);

  return (
    <View className='flex-1 bg-background'>
       <StatusBar barStyle="light-content" backgroundColor={colors.primary}/>

    
       <View className='justify-center items-center gap-5 flex-1'>
              {
                items.map((item,id)=>{
                  return(

                    <TouchableOpacity key={id} onPress={()=>handle(id)}>
                          <View
                                className={`rounded-2xl border  p-4 shadow-md justify-center items-center relative overflow-hidden gap-2 ${item.border} bg-white`}
                                style={layoutStyle.home_card}
                              >
                                  <Image source={item.icon} className="w-12 h-12 mb-2" resizeMode="contain" />
                                  <Text className={`text-base font-semibold tracking-wider ${item.textColor}`}>
                                    {item.type}
                                  </Text>

                                    <View className={`h-40 w-40 ${item.bubbleColor} rounded-full absolute -top-10 -right-10 -z-10 bg-sk`} />
                                    <View className={`h-20 w-20 ${item.bubbleColor} rounded-full absolute -bottom-5 -left-5 -z-10`} />
                          </View>
                    </TouchableOpacity>
                  )
                })
              }

       </View>

       <View className="items-center h-10 bg-green-200 justify-center">
          <Text className="font-bold text-center text-green-600">
            Designed and developed by Leadwinner.com
          </Text>
        </View>

    </View>
  )
}

export default HomeScreen