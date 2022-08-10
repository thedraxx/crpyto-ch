import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddCrypto from '../pages/AddCrypto';
import Home from '../pages/Home';
import {
  ImageCustom,
  TitleApp,
  ViewTitleStack,
  styles,
} from '../styles/MainStackStyle';

const Stack = createNativeStackNavigator();

const NavHomes = (): JSX.Element => (
  <ViewTitleStack>
    <ImageCustom source={require('../photos/stock.jpg')} />
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
          headerStyle: {
            backgroundColor: styles.headerStyleHome.backgroundColor,
          },
          headerTitle: () => <NavHomes />,
        }}
      />
      <Stack.Screen
        name="AddCrypto"
        component={AddCrypto}
        options={{
          title: 'Back Home',
          headerStyle: {
            backgroundColor: styles.headerStyleAdd.backgroundColor,
          },
          headerTintColor: styles.headerStyleAdd.tintColor,
          headerTitleStyle: {
            fontWeight: styles.headerStyleAdd.fontWeight,
            fontSize: styles.headerStyleAdd.titleFontSize,
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
