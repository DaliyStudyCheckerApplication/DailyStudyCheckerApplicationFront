import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Button, StyleSheet} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerBlock}>
        <Button
          title="Header"
          onPress={() =>
            navigation.push('Detail', {
              id: 1,
            })
          }
        />
      </View>
      <View style={styles.weekBlock}>
        <Button
          title="WeekPlaceHolder"
          onPress={() =>
            navigation.push('Detail', {
              id: 1,
            })
          }
        />
      </View>
      <View style={styles.infoBlock}>
        <Button
          title="Info"
          onPress={() =>
            navigation.push('Detail', {
              id: 1,
            })
          }
        />
      </View>
      <View style={styles.groupBlock}>
        <Button
          title="Group"
          onPress={() =>
            navigation.push('Detail', {
              id: 1,
            })
          }
        />
      </View>
    </View>
  );
}
function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}
function MessageScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈 aka Mypage',
          //   tabBarIcon: ({coler, size}) => (
          //     <Icon name="home" color={coler} size={size} />
          //   ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '기능1',
          //   tabBarIcon: ({coler, size}) => (
          //     <Icon name="search" color={coler} size={size} />
          //   ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '기능2',
          //   tabBarIcon: ({coler, size}) => (
          //     <Icon name="notifications" color={coler} size={size} />
          //   ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '기능3',
          //   tabBarIcon: ({coler, size}) => (
          //     <Icon name="message" color={coler} size={size} />
          //   ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerBlock:{
    backgroundColor: 'red',
  },
  footerBlock:{
    backgroundColor: 'red',
  },
  weekBlock: {},
  infoBlock: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent:'center',
  },
  groupBlock: {},
});

export default MainScreen;
