import {Props} from '../interfaces/Interfaces';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  HorizontalView,
  ImageCrypto,
  ListCryptos,
  TextChange,
  TextNoCryptos,
  TextPrice,
  ViewEachCryptos,
  ViewHorizontal,
  ViewImageandText,
  ViewPrices,
} from '../styles/ViewCryptosStyles';

function ViewCryptos(): JSX.Element {
  const [cryptos, setCryptos] = useState<Props[] | []>([]);
  const {cripto} = useSelector((state: Props) => state.cripto);

  useEffect(() => {
    // Set the data in the storage
    AsyncStorage.setItem('cripto', JSON.stringify(cripto));
    // Get the data from the storage and send to cryptos
    AsyncStorage.getItem('cripto').then(value =>
      value ? setCryptos(JSON.parse(value)) : null,
    );
  }, [cripto]);

  return (
    <>
      {cryptos.length !== 0 ? (
        cryptos.map(
          (crypto: Props): JSX.Element => (
            <View key={crypto._id}>
              <ListCryptos>
                <ViewEachCryptos>
                  <ViewImageandText>
                    <ImageCrypto source={{uri: `${crypto.src}`}} />
                    <ViewHorizontal>
                      <Text>{crypto.name}</Text>
                      <Text>{crypto.code}</Text>
                    </ViewHorizontal>
                  </ViewImageandText>
                  <ViewPrices>
                    <TextPrice> $ {crypto.price}</TextPrice>
                    {crypto.change > 0 ? (
                      <TextChange positive>
                        <AntDesign name="areachart" size={20} color="green" />
                        {crypto.change}%
                      </TextChange>
                    ) : (
                      <TextChange>
                        <AntDesign name="areachart" size={20} color="red" />
                        {crypto.change}%
                      </TextChange>
                    )}
                  </ViewPrices>
                </ViewEachCryptos>
                <HorizontalView />
              </ListCryptos>
            </View>
          ),
        )
      ) : (
        <TextNoCryptos>No Cryptos</TextNoCryptos>
      )}
    </>
  );
}
export default ViewCryptos;
