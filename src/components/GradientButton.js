import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';

const GradientButton=({ title, onPress ,enable=true})=>{

  const {colors}=useTheme();
  return (
    <View className="rounded-md overflow-hidden border border-primary ">
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient
          colors={enable?[colors.primary,colors.secondary]:["white","white"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="px-5 py-2"
        >
          <Text className={`text-${enable?'white':"primary"} text-sm font-semibold text-center tracking-wide`}>
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default GradientButton;
