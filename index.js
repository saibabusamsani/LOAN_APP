import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { name as appName } from './app.json';
import themeReducer from  "./src/store/themeSlice"
import ThemeManager from './src/components/ThemeManager';
import App from './src/App';



// 1. Create store
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});



const Root = () => (
  <Provider store={store}>
    <ThemeManager>
      <App/>
    </ThemeManager>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
