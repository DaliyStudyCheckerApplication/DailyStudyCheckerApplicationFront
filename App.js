import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './navigation/StackNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
}

export default App;
