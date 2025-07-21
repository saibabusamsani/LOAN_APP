import React from 'react';
import "./global.css";
import AppNavigator from './navigations/AppNavigator';
import { Provider } from 'react-redux';
import store from './store/Store';
import ThemeManager from './components/ThemeManager';
import { DatabaseProvider } from '@nozbe/watermelondb/react';
import { database } from './database/index';



const App=()=>{
  return (
    <Provider store={store}>
      <DatabaseProvider database={database}>
          <ThemeManager>
              <AppNavigator/>
          </ThemeManager>
      </DatabaseProvider>
    </Provider>
  )
}
export default App;