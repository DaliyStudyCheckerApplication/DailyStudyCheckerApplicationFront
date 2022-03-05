import React from 'react';

import {View, StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const Example = () => {
  return (
    <>
      <CalendarStrip style={styles.calendar} />
    </>
  );
};

export default Example;

const styles = StyleSheet.create({
  calendar: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100%',
    width: '100%',
  },
});
