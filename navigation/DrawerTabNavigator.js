import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MyAccount from '../screens/MyAccount';
import AppSetting from '../screens/AppSetting';
import TestScreen from '../screens/TestScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (

      <Drawer.Navigator>
        <Drawer.Screen name="MyAccount" component={MyAccount} />
        <Drawer.Screen name="AppSetting" component={AppSetting} />
      </Drawer.Navigator>
  
  );
}
