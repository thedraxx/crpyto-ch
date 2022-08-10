import React from 'react';
import ViewCryptos from '../components/ViewCryptos';
import {ButtonText, AddButton, AddView, ViewHome} from '../styles/HomeStyles';
import ModalView from '../components/ModalView';

function Home({navigation}: any): JSX.Element {
  return (
    <ViewHome>
      {/* <ModalView /> */}
      <ViewCryptos />
      <AddView>
        <AddButton onPress={() => navigation.navigate('AddCrypto')}>
          <ButtonText> + Add a Cryptocurrency</ButtonText>
        </AddButton>
      </AddView>
    </ViewHome>
  );
}
export default Home;
