import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainStack} from './src/navigation/MainStack';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainStack />
    </SafeAreaView>
  );
};
