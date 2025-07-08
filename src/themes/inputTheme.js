
import { useTheme } from 'react-native-paper';

export const InputTheme = () => {
  const { colors, roundness } = useTheme();

  console.log('Theme colors:', colors); 

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
