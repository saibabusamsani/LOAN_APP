import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({colors,className}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className={className}
    />
  );
};

export default GradientBackground;
