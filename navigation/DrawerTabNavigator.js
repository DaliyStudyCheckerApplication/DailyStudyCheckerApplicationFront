import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MyAccount from '../screens/MyAccount';
import AppSetting from '../screens/AppSetting';
import HomeScreen from '../screens/HomeScreen';
import SideDrawer from '../screens/my_drawer';


const Drawer = createDrawerNavigator();

export default function DrawerTabNavigator() {
  return (
    <Drawer.Navigator
    drawerType="front"
    drawerPosition='left'
    // drawerContent={SideDrawer}
   >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="MyAccount" component={MyAccount} />
      <Drawer.Screen name="AppSetting" component={AppSetting} />
    </Drawer.Navigator>
  );
}
