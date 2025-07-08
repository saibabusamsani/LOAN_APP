import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';

const GradientButton=({ title, onPress })=>{

  const {colors}=useTheme();
  return (
    <View className="rounded-md overflow-hidden ">
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient
          colors={[colors.primary,colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="px-5 py-2"
        >
          <Text className="text-white text-sm font-semibold text-center tracking-wide">
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default GradientButton;
