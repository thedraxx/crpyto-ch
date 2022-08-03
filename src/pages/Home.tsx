import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

export const Home = ({navigation}: any) => {
  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate('AddCrypto')}>
        <Text> Add a Cryptocurrency</Text>
      </TouchableHighlight>
    </View>
  );
};
