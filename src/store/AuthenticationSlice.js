import { createSlice } from '@reduxjs/toolkit';

const AuthenticationSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    isLoading: true,
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    setLogout(state) {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLogin, setLogout, setLoading } = AuthenticationSlice.actions;
export const {reducer:authenticationReducer}=AuthenticationSlice;
