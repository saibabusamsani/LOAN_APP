import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  themeColor: 'blue',
  isThemeLoaded: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.themeColor = action.payload;
      state.isThemeLoaded = true;
    },
  },
});

export const applyTheme = (color) => async (dispatch) => {
  const THEME_KEY = 'themeColor';
  const selectedColor = color || (await AsyncStorage.getItem(THEME_KEY)) || 'blue';
  await AsyncStorage.setItem(THEME_KEY, selectedColor);
  dispatch(updateTheme(selectedColor));
};

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
