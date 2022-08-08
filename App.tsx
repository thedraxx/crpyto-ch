import React from 'react';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {SafeAreaViewCustom} from './src/styles/AppStyles';

export const App = () => {
  return (
    <SafeAreaViewCustom>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </SafeAreaViewCustom>
  );
};
