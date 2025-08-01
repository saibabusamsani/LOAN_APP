import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { layoutStyle } from '../styles/layout';
import { useTheme } from 'react-native-paper';
import { notificationPermission } from '../utils/PermissionHelper';

const HomeScreen = () => {

const navigation=useNavigation();
const { colors } = useTheme(); 

const items = [
  {
    type: "Apply Loans",
    icon: require("../assets/signing.png"),
  },
  {
    type: "Applied Loans",
    icon: require("../assets/completed-task.png"),
  },
  {
    type: "Loans Summary",
    icon: require("../assets/agreement.png"),
  },
];

const handle=(id)=>{
  let route;
  switch(id)
  {
    case 0:
      route="LoanApply";
      break;
    case 1:
      route="AppliedLoansListNavigator";
      break;
    
    case 2:
      route="LoanSummary";
      break;
     default:              
      route = 'LoanApply';
  };
   navigation.navigate(route);

};

   useEffect(() => {
    const checkNotificationPermission = async () => {
      const permissionGranted = await notificationPermission();

      if (permissionGranted) {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    };

    checkNotificationPermission();
  }, []);


  return (
    <View className='flex-1 bg-background'>
    
       <View className='justify-center items-center gap-5 flex-1'>
              {
                items.map((item,id)=>{
                  return(

                    <TouchableOpacity key={id} onPress={() => handle(id)}>
                      <View
                        className={`rounded-2xl p-4 shadow-md justify-center items-center relative overflow-hidden gap-2  bg-white border border-border`}
                        style={layoutStyle.home_card}
                      >
                        <Image source={item.icon} className="w-12 h-12 mb-2" resizeMode="contain" />
                        <Text className={`text-base tracking-wider font-inter-semibold text-black`}>
                          {item.type}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )
                })
              }

       </View>

       <View className="items-center h-10 bg-primary justify-center">
          <Text className="text-center text-white font-inter-medium">
            Designed and developed by Leadwinner.com
          </Text>
        </View>

    </View>
  )
}

export default HomeScreen