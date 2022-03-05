import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DrawerTabNavigator from './DrawerTabNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Button
              title="Drawer"
              onPress={() =>
                navigation.navigate('DrawerTabNavigation')
              }></Button>
          ),
        }}></Stack.Screen>
      <Stack.Screen
        name="DrawerTabNavigation"
        component={DrawerTabNavigator}></Stack.Screen>
    </Stack.Navigator>
  );
}
