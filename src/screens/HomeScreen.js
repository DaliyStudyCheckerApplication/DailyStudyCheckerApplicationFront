import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios';

import HomeScreenHeader from '../components/homeScreen/HomeScreenHeader';
import HomeScreenBody from '../components/homeScreen/HomeScreenBody';
import HomeScreenFooter from '../components/homeScreen/HomeScreenFooter';

function HomeScreen() {
  // const [member, setMember] = useState({
  //   email: 'default',
  //   locationName: 'default',
  //   locationX: 'default',
  //   locationY: 'defalut',
  //   memberId: 'default',
  //   memberName: 'default',
  //   phoneNumber: 'default',
  // });
  // useEffect(() => {
  //   const userId = 1;
  //   axios
  //     .get(`http://192.168.60.224:8080/api/v1/members?id=${userId}`)
  //     .then(e => {
  //       console.log(e.data.data);
  //       setMember(e.data.data);
  //     });
  // }, []);
  // return <HomeScreenTitle memberData={member} />;
  return (
    <>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <HomeScreenHeader style={styles.header} />
        <HomeScreenBody style={styles.body} />
        <HomeScreenFooter style={styles.footer} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff1',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 6,
    backgroundColor: '#ffFDDF',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
