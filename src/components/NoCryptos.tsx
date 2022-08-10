import React from 'react';
import {ListCryptos, TextNoCryptos} from '../styles/CryptoListStyles';

const NoCryptos = (): JSX.Element => (
  <ListCryptos>
    <TextNoCryptos>Nothing to see</TextNoCryptos>
  </ListCryptos>
);
export default NoCryptos;
