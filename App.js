import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Screen/Home/Home';
import Card from './src/Screen/Home/Card';
import Header from './src/Componen/Header';
// import SplashScreen from './src/Screen/SplashScreen/SplashScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Card" component={Card}></Stack.Screen>

        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
