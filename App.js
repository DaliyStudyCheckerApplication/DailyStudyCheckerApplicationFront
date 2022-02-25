import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <View>
    <NavigationContainer>
      {/* <StackNavigator></StackNavigator> */}
    </NavigationContainer>
    </View>
  );
   
}

export default App;
