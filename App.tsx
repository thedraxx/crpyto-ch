import React from 'react';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import styled from 'styled-components/native';

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

const SafeAreaViewCustom = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding-top: 10px;
`;
