import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { authenticationReducer } from "./AuthenticationSlice";


const store = configureStore({
  reducer: {
    theme: themeReducer,
    authentication:authenticationReducer,


  },
});

export default store;