import React from 'react';
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {SafeAreaViewCustom} from './styles';

const App = () => (
  <SafeAreaViewCustom>
    <Provider store={store}>
      <MainStack />
    </Provider>
  </SafeAreaViewCustom>
);
export default App;
