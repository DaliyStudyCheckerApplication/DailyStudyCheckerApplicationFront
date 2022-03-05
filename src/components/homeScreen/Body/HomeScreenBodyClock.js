import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const HomeScreenBodyClock = () => (
  <View style={styles.clock}>
    <CountdownCircleTimer
      isPlaying
      duration={7}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}>
        initialRemainingTime={15}
      {({remainingTime}) => <Text>{remainingTime}</Text>}
      onComplete={() => {
      // 1. 만료
      return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
    }}
    </CountdownCircleTimer>
  </View>
);

export default HomeScreenBodyClock;


const styles = StyleSheet.create({
    clock: {
      flex: 2,
      backgroundColor: '#fff',
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
    },
})
