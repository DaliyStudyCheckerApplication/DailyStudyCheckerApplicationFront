import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigator';
import TestScreen from '../screens/TestScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="main"
        component={BottomTabNavigation}
        options={{
          title: '홈',
          headerShown: true,
        }}
      /> */}
      <Stack.Screen name="Test" component={TestScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
