import AsyncStorage from '@react-native-async-storage/async-storage';

const setSP = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error setting ${key} in AsyncStorage`, error);
  }
};

const getSP = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(`Error getting ${key} from AsyncStorage`, error);
    return null;
  }
};

const removeSP = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key} from AsyncStorage`, error);
  }
};

export {setSP,getSP,removeSP};

