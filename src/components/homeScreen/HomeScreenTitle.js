import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreenTitle = ({memberData}) => {
  return (
    <>
      <Text>home screen</Text>
      <Text>{memberData.email}</Text>
      <Text>{memberData.locationName}</Text>
      <Text>{memberData.locationX}</Text>
      <Text>{memberData.locationY}</Text>
      <Text>{memberData.memberId}</Text>
      <Text>{memberData.memberName}</Text>
      <Text>{memberData.phoneNumber}</Text>
    </>
  );
};

export default HomeScreenTitle;
