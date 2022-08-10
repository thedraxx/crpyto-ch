import {Props} from '../interfaces/Interfaces';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import CryptoList from './CryptoList';

const ViewCryptos = (): JSX.Element => {
  const [cryptos, setCryptos] = useState<Props[]>([]);
  const {crypto} = useSelector((state: Props) => state.crypto);

  useEffect(() => {
    // Set the data in the storage
    AsyncStorage.setItem('cripto', JSON.stringify(crypto));
    // Get the data from the storage and send to cryptos
    AsyncStorage.getItem('cripto').then(value =>
      value ? setCryptos(JSON.parse(value)) : null,
    );
  }, [crypto]);

  return <CryptoList cryptos={cryptos} />;
};
export default ViewCryptos;
