import React from 'react';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {SafeAreaViewCustom, ViewStack} from './src/styles/AppStyles';
import {View} from 'react-native';

export const App = () => {
  return (
    <SafeAreaViewCustom>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </SafeAreaViewCustom>
  );
};
