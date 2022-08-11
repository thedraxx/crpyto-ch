import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import CryptoList from './CryptoList';
import {Props} from '../../interfaces/Interfaces';

const ViewCryptos = ({navigation}): JSX.Element => {
  const [cryptos, setCryptos] = useState<Props[]>([]);
  const {crypto} = useSelector((state: Props) => state.crypto);

  useEffect(() => {
    AsyncStorage.setItem('cripto', JSON.stringify(crypto));
    AsyncStorage.getItem('cripto').then(value =>
      value ? setCryptos(JSON.parse(value)) : null,
    );
  }, [crypto]);

  return <CryptoList cryptos={cryptos} navigation={navigation} />;
};
export default ViewCryptos;
