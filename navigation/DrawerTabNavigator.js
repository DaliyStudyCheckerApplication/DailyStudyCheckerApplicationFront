import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MyAccount from '../screens/MyAccount';
import AppSetting from '../screens/AppSetting';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MyAccount" component={MyAccount} />
        <Drawer.Screen name="AppSetting" component={AppSetting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
