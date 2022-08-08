import React from 'react';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {SafeAreaViewCustom} from './src/styles/AppStyles';

export const App = () => {
  return (
    // SafeAreaView is used to make the app look better
    <SafeAreaViewCustom>
      {/* Provider for the store */}
      <Provider store={store}>
        {/* This is a component that use to navigate between screens */}
        <MainStack />
      </Provider>
    </SafeAreaViewCustom>
  );
};
