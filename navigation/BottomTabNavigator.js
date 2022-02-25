import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DrawerTabNavigator from '../navigation/DrawerTabNavigator';
import TeamScreen from '../screens/TeamScreen';
import StatusScreen from '../screens/StatusScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DrawerTabNavigator" component={DrawerTabNavigator} />
      <Tab.Screen name="Team" component={TeamScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
    </Tab.Navigator>
  );
}
