import React from 'react';
import {Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  TextName,
  TextCode,
} from '../styles/CryptoListStyles';
import ButonAddCrypto from './ButonAddCrypto';

const CryptoList = ({cryptos, navigation}): JSX.Element => (
  console.log(navigation),
  (
    <FlatListCustom
      data={cryptos}
      keyExtractor={(item: {id: number}) => item.id}
      ListEmptyComponent={<NoCryptos />}
      ListFooterComponent={<ButonAddCrypto navigation={navigation} />}
      renderItem={({item}: any): JSX.Element => (
        <ListCryptos>
          <ListCryptos>
            <ViewEachCryptos>
              <ViewImageandText>
                <ImageCrypto source={{uri: `${item.src}`}} />
                <ViewHorizontal>
                  <TextName>{item.name}</TextName>
                  <TextCode>{item.code}</TextCode>
                </ViewHorizontal>
              </ViewImageandText>
              <ViewPrices>
                <TextPrice> $ {item.price}</TextPrice>
                {item.change > 0 ? (
                  <TextChange positive>
                    <MaterialIcons name="north-east" size={15} color="green" />
                    {item.change}%
                  </TextChange>
                ) : (
                  <TextChange>
                    <MaterialIcons name="south-west" size={15} color="red" />
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
  )
);

export default CryptoList;
