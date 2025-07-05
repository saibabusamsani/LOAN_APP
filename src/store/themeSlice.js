// store/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeColor: 'orange',
  },
  reducers: {
    setThemeColor: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

export const { setThemeColor } = themeSlice.actions;
export default themeSlice.reducer;
