import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import StackNavigator from './navigation/StackNavigator';

import BottomTabNavigation from './src/navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='BottomTabNavigation'
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          props="hi"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
