import React from 'react';
import {FlatList, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Props} from '../interfaces/Interfaces';
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
  TextNoCryptos,
} from '../styles/ViewCryptosStyles';

export const FlatLista = ({cryptos}: Props): JSX.Element => {
  console.log(cryptos);
  return (
    <View>
      <FlatList
        data={cryptos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            {cryptos.length !== 0 ? (
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
            ) : (
              <TextNoCryptos>No Cryptos</TextNoCryptos>
            )}
          </>
        )}
      />
    </View>
  );
};
