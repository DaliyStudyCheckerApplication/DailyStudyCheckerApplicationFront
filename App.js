import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
import InfoScreen from './screens/InfoScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Detail" component={DetailScreen} />
        <Drawer.Screen name="Info" component={InfoScreen} />
      </Drawer.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
