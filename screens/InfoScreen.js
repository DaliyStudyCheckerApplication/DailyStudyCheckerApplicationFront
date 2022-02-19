
import React from 'react';
import {View, Button} from 'react-native';

function InfoScreen({navigation}) {
  return (
    <View>
      <Button
        title="Infos 열기"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default InfoScreen;
