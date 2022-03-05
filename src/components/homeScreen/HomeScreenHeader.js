import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import HomeScreenHeaderCalender from './Header/HomeScreenHeaderCalender'

const HomeScreenHeader = ({style}) => {
  return (
    <View style={style}>
      
      <HomeScreenHeaderCalender></HomeScreenHeaderCalender>
      {/* <Text>{memberData.email}</Text>
      <Text>{memberData.locationName}</Text>
      <Text>{memberData.locationX}</Text>
      <Text>{memberData.locationY}</Text>
      <Text>{memberData.memberId}</Text>
      <Text>{memberData.memberName}</Text>
      <Text>{memberData.phoneNumber}</Text> */}
    </View>
  );
};

export default HomeScreenHeader;
