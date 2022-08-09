import {ScrollView} from 'react-native';
import React from 'react';
import ViewCryptos from '../components/ViewCryptos';
import {
  TextButton,
  TouchableAddButton,
  TouchableAddView,
  ViewHome,
} from '../styles/HomeStyles';
import ModalView from '../components/ModalView';

function Home({navigation}: any): JSX.Element {
  return (
    <ViewHome>
      {/* Modal appears when an error occours */}
      {/* <ModalView /> */}
      <ViewCryptos />
      <TouchableAddView>
        <TouchableAddButton onPress={() => navigation.navigate('AddCrypto')}>
          <TextButton> + Add a Cryptocurrency</TextButton>
        </TouchableAddButton>
      </TouchableAddView>
    </ViewHome>
  );
}
export default Home;
