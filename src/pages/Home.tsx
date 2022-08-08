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
      <ScrollView>
        <ViewCryptos />
        <TouchableAddView>
          <TouchableAddButton onPress={() => navigation.navigate('AddCrypto')}>
            <TextButton> + Add a Cryptocurrency</TextButton>
          </TouchableAddButton>
        </TouchableAddView>
      </ScrollView>
    </ViewHome>
  );
}
export default Home;
