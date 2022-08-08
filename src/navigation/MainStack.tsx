import {ColorBlack, ColorBlue, Colorwhite} from '../utils/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddCrypto from '../pages/AddCrypto';
import Home from '../pages/Home';
import React from 'react';
import {CustomImage} from '../styles/MainStackStyles';

function MainStack(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <CustomImage source={require('../photos/stock.jpg')} />
        <Stack.Navigator initialRouteName="CryptoTracker Pro">
          <Stack.Screen
            name="CryptoTracker Pro"
            component={Home}
            options={{
              title: 'CryptoTracker Pro',
              headerStyle: {
                backgroundColor: `${ColorBlue}`,
              },
              headerTintColor: `${Colorwhite}`,
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
            }}
          />
          <Stack.Screen
            name="AddCrypto"
            component={AddCrypto}
            options={{
              title: 'Back Home',
              headerStyle: {
                backgroundColor: `${Colorwhite}`,
              },
              headerTintColor: `${ColorBlack}`,
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default MainStack;
