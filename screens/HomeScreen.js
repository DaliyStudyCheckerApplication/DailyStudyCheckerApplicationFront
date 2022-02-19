import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';


function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.WeekArea}>
        <Button
          title="날짜 공간"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
      <View style={styles.InfoArea}>
        <Button
          title="Info 공간"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
      <View style={styles.GroupArea}>
        <Button
          title="Groups 열기"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  WeekArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  InfoArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
  GroupArea: {alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
