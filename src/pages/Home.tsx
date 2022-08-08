import {ScrollView} from 'react-native';
import React from 'react';
import ViewCryptos from '../components/ViewCryptos';
import {
  TextButton,
  TouchableAddButton,
  TouchableAddView,
  ViewHome,
} from '../styles/HomeStyles';

function Home({navigation}: any): JSX.Element {
  return (
    <ViewHome>
      {/* ScrollView for scroll the cryptos */}
      <ScrollView>
        {/* This shows the data added */}
        <ViewCryptos />
        {/* StyledView for added crypto */}
        <TouchableAddView>
          {/* Bottom to go to add a new crypto */}
          <TouchableAddButton onPress={() => navigation.navigate('AddCrypto')}>
            <TextButton> + Add a Cryptocurrency</TextButton>
          </TouchableAddButton>
        </TouchableAddView>
      </ScrollView>
    </ViewHome>
  );
}
export default Home;
