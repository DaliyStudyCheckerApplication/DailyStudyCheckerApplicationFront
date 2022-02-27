import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import HomeScreenTitle from '../components/homeScreen/HomeScreenTitle';
import axios from 'axios';

function HomeScreen() {
  const [member, setMember] = useState({
    email: 'default',
    locationName: 'default',
    locationX: 'default',
    locationY: 'defalut',
    memberId: 'default',
    memberName: 'default',
    phoneNumber: 'default',
  });
  useEffect(() => {
    const userId = 1;
    axios
      .get(`http://192.168.60.224:8080/api/v1/members?id=${userId}`)
      .then(e => {
        console.log(e.data.data);
        setMember(e.data.data);
      });
  }, []);
  return <HomeScreenTitle memberData={member} />;
}

export default HomeScreen;
