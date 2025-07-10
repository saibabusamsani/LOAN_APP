import { createSlice } from '@reduxjs/toolkit';
import { getSP, setSP } from '../utils/StorageHelper';

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

  const selectedColor = color || (await getSP("THEME_COLOR")) || 'blue';

  await setSP("THEME_COLOR", selectedColor);

  dispatch(updateTheme(selectedColor));
};

export const { updateTheme } = themeSlice.actions;
export const { reducer: themeReducer } = themeSlice;
