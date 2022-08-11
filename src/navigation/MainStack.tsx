import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddCrypto from '../pages/AddCrypto/AddCrypto';
import Home from '../pages/Home/Home';
import {ImageCustom, TitleApp, ViewTitleStack, styles} from './styles';

const Stack = createNativeStackNavigator();

const NavHomes = (): JSX.Element => (
  <ViewTitleStack>
    <ImageCustom source={require('../assets/girl.png')} />
    <TitleApp>CryptoTracker Pro</TitleApp>
  </ViewTitleStack>
);

const MainStack = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="CryptoTracker Pro">
      <Stack.Screen
        name="CryptoTracker Pro"
        component={Home}
        options={{
          headerStyle: styles.headerStyleHome,
          headerTitle: () => <NavHomes />,
        }}
      />

      <Stack.Screen
        name="AddCrypto"
        component={AddCrypto}
        options={{
          title: 'Back Home',
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
