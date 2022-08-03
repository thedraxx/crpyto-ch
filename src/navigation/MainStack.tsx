import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../pages/Home';
import {AddCrypto} from '../pages/AddCrypto';

export const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      {/* Using navigation for navigate between screens */}
      <NavigationContainer >
        <Stack.Navigator initialRouteName="CryptoTracker Pro">
          {/* Screen Home */}
          <Stack.Screen name="CryptoTracker Pro" component={Home} />
          {/* Screen NewTask */}
          <Stack.Screen name="AddCrypto" component={AddCrypto} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
