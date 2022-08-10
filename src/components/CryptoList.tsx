import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Props} from '../interfaces/Interfaces';
import NoCryptos from './NoCryptos';
import {
  HorizontalView,
  ImageCrypto,
  ListCryptos,
  TextChange,
  TextPrice,
  ViewEachCryptos,
  ViewHorizontal,
  ViewImageandText,
  ViewPrices,
  FlatListCustom,
} from '../styles/CryptoListStyles';

const CryptoList = ({cryptos}: Props): JSX.Element => {
  const [isEmptyCryptos, setIsEmptyCryptos] = useState<boolean>(false);

  useEffect(() => {
    if (cryptos.length > 0) {
      setIsEmptyCryptos(true);
    } else {
      setIsEmptyCryptos(false);
    }
  }, [cryptos]);

  return (
    <FlatListCustom
      data={cryptos}
      keyExtractor={(item: {id: number}) => item.id}
      ListEmptyComponent={isEmptyCryptos ? null : <NoCryptos />}
      renderItem={({item}: any): JSX.Element => (
        <ListCryptos>
          <ListCryptos>
            <ViewEachCryptos>
              <ViewImageandText>
                <ImageCrypto source={{uri: `${item.src}`}} />
                <ViewHorizontal>
                  <Text>{item.name}</Text>
                  <Text>{item.code}</Text>
                </ViewHorizontal>
              </ViewImageandText>
              <ViewPrices>
                <TextPrice> $ {item.price}</TextPrice>
                {item.change > 0 ? (
                  <TextChange positive>
                    <AntDesign name="areachart" size={20} color="green" />
                    {item.change}%
                  </TextChange>
                ) : (
                  <TextChange>
                    <AntDesign name="areachart" size={20} color="red" />
                    {item.change}%
                  </TextChange>
                )}
              </ViewPrices>
            </ViewEachCryptos>
            <HorizontalView />
          </ListCryptos>
        </ListCryptos>
      )}
    />
  );
};

export default CryptoList;
