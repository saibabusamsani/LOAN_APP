import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';



const Root = () => <App/>;


AppRegistry.registerComponent(appName, () => Root);
