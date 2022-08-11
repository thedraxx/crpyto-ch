import React from 'react';
import {ListCryptos, TextNoCryptos} from './styles';

const NoCryptos = (): JSX.Element => (
  <ListCryptos>
    <TextNoCryptos>Nothing to see</TextNoCryptos>
  </ListCryptos>
);
export default NoCryptos;
