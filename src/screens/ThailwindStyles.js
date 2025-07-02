import "../global.css";
import { FlatList,  StatusBar, StyleSheet, Text, View } from "react-native";
import { textStyles } from "../styles/text";
import { layoutStyle } from "../styles/layout";
import { Switch } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";


export default function NativeWindSample() {
  
  const dispatch=useDispatch();


  const data = [
    { name: "Virat Kohli", age: 36, role: "Batsman" },
    { name: "Rohit Sharma", age: 37, role: "Batsman" },
    { name: "Jasprit Bumrah", age: 31, role: "Bowler" },
    { name: "Ravindra Jadeja", age: 36, role: "All‑Rounder" },
    { name: "KL Rahul", age: 33, role: "Wicket‑Keeper" },
  ];

    const darkMode  = useSelector((s) => s.theme.isDarkTheme);

    console.log("dark mode : ",darkMode)


  const renderCard = ({ item }) => (
    <View className="bg-surface-secondary p-3 rounded-md mr-5 h-32 justify-center gap-1 dark:bg-success-secondary-dark border-b-4 border-white  dark:border-black" style={layoutStyle.card}>
      <View className="flex-row items-start">
        <Text className="w-24 font-bold text-blue-500 sm:text-[25px] md:text-[25px]">Name</Text>
        <Text className="w-4">:</Text>
        <Text className="flex-1 text-xs">{item.name}</Text>
      </View>
      <View className="flex-row items-start">
        <Text className="w-24 font-bold text-blue-500">Age</Text>
        <Text className="w-4">:</Text>
        <Text className="flex-1 text-xs">{item.age}</Text>
      </View>
      <View className="flex-row items-start">
        <Text className="w-24 font-bold text-blue-500">Role</Text>
        <Text className="w-4">:</Text>
        <Text className="flex-1 text-xs">{item.role}</Text>
      </View>
    </View>
  );

  return (
  <View className="flex-1 bg-background dark:bg-background-dark">


      <StatusBar
      barStyle={darkMode ? 'light-content' : 'dark-content'}
      backgroundColor={darkMode ? '#000000' : '#ffffff'}
    />
      
    <View className="bg-surface dark:bg-surface-dark pt-8 ">
      <Text className="text-center mb-4 font-semibold text-white  dark:text-blue-700" style={textStyles.title}>
        Players
      </Text>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(_, i) => `${i}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 12,
         
        }}

      />
    </View>

    <View className="bg-background-dark dark:bg-background justify-center items-center flex-row absolute bottom-5 right-4 rounded-2xl" style={layoutStyle.theam}>
      <Text className="text-white dark:text-background-dark font-bold">{!darkMode?"dark mode":"light mode"}</Text>
      <Switch value={darkMode} onValueChange={() => dispatch(toggleTheme())}/>
    </View>



    </View>
  );
}


