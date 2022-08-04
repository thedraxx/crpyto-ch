import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStack } from './src/navigation/MainStack';
import { Provider } from 'react-redux'
import { store } from './src/store/store';

export const App = () => {
  return (
    // SafeAreaView is used to make the app look better
    <SafeAreaView style={{ flex: 1 }}>
      {/* Provider for the store */}
      <Provider store={store}>
        {/* This is a component that use to navigate between screens */}
        <MainStack />
      </Provider>
    </SafeAreaView>
  );
};
