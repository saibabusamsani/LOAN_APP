import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.text}>
        {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
      </Text>
      <Button mode="contained" onPress={() => dispatch(toggleTheme())}>
        Toggle Theme
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginBottom: 20,
  },
});

export default Home;
