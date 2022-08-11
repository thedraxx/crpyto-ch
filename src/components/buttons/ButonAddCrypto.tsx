import React from 'react';
import {AddButton, AddView, ButtonText} from './style';

const ButonAddCrypto = ({navigation}: any) => (
  <AddView>
    <AddButton onPress={() => navigation.navigate('AddCrypto')}>
      <ButtonText> + Add a Cryptocurrency</ButtonText>
    </AddButton>
  </AddView>
);

export default ButonAddCrypto;
