// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';

import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './RegistrationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      {/* Other screens */}
      <Stack.Screen
        name="MainScreen"
        component={Navigation} // Specify the component for the Home screen
        options={{ title: 'MainScreen' }}
      />
      {/* <Navigation /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
