import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ButtonText, AddButton, AddView} from '../styles/HomeStyles';

const ButonAddCrypto = ({navigation}: any) => {
  return (
    <AddView>
      <AddButton onPress={() => navigation.navigate('AddCrypto')}>
        <ButtonText> + Add a Cryptocurrency</ButtonText>
      </AddButton>
    </AddView>
  );
};

export default ButonAddCrypto;
