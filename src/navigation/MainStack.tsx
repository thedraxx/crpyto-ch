import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddCrypto from '../pages/AddCrypto';
import Home from '../pages/Home';
import React from 'react';

function MainStack(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <>
      {/* Using navigation for navigate between screens */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CryptoTracker Pro">
          {/* Screen Home */}
          <Stack.Screen
            name="CryptoTracker Pro"
            component={Home}
            options={{
              title: 'CryptoTracker Pro',
              headerStyle: {
                backgroundColor: '#ffffff',
              },
              headerTintColor: '#000000',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          {/* Screen NewTask */}
          <Stack.Screen
            name="AddCrypto"
            component={AddCrypto}
            options={{
              title: 'Back Home',
              headerStyle: {
                backgroundColor: '#ffffff',
              },
              headerTintColor: '#000000',
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
