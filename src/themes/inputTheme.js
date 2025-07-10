
import { useTheme } from 'react-native-paper';

export const InputTheme = () => {
  const { colors, roundness } = useTheme();


  return {
    roundness,
    colors: {
      ...colors,
      outline: colors.border_secondary,
      primary: colors.border, 
      background:"white"
    },
  };
};
