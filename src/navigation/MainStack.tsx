import React from 'react';
import {ColorBlack, ColorBlue, Colorwhite} from '../utils/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddCrypto from '../pages/AddCrypto';
import Home from '../pages/Home';
import TitleHome from '../components/TitleHome';

const Stack = createNativeStackNavigator();

const MainStack = (): JSX.Element => (
  <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CryptoTracker Pro">
        <Stack.Screen
          name="CryptoTracker Pro"
          component={Home}
          options={{
            headerStyle: {backgroundColor: ColorBlue},
            headerTitle: props => <TitleHome {...props} />,
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

export default MainStack;
