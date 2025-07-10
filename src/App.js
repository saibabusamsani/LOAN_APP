import React from 'react';
import "./global.css";
import AppNavigator from './navigations/AppNavigator';
import { Provider } from 'react-redux';
import store from './store/Store';
import ThemeManager from './components/ThemeManager';



export default function App() {
  return (
    <Provider store={store}>
      <ThemeManager>
          <AppNavigator/>
      </ThemeManager>
    </Provider>
  )
  
  
}
