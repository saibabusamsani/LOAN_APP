import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DatabaseProvider } from '@nozbe/watermelondb/react';
import Database from './screens/Database';
import { database } from './model/database';
import ThailwindStyles from './screens/ThailwindStyles';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <DatabaseProvider database={database}>
        <NavigationContainer>
          <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName='thailwind'>
            <Stack.Screen name="thailwind" component={ThailwindStyles} />
            <Stack.Screen name="Database" component={Database} />
          </Stack.Navigator>
        </NavigationContainer>

     </DatabaseProvider>
  );
}
