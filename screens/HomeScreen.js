import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

function HomeScreen() {
  return (
    <>
      <Text>HomeScreen</Text>
      <CountdownCircleTimer
        isPlaying
        duration={7}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}>
        {({remainingTime}) => <Text>{remainingTime}</Text>}
      </CountdownCircleTimer>
    </>
  );
}

export default HomeScreen;
