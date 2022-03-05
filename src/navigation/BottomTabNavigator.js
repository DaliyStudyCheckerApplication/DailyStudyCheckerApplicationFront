import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackNavigator from '../navigation/StackNavigator';
import TeamScreen from '../screens/TeamScreen';
import StatusScreen from '../screens/StatusScreen';
import DrawerTabNavigator from './DrawerTabNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'My Page'}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="My Page" component={DrawerTabNavigator} />
      <Tab.Screen name="Team" component={TeamScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
    </Tab.Navigator>
  );
}
