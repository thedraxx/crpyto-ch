import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors';
import ButonAddCrypto from '../buttons/ButonAddCrypto';
import NoCryptos from './NoCryptos';
import {
  FlatListCustom,
  HorizontalView,
  ImageCrypto,
  ListCryptos,
  TextChange,
  TextCode,
  TextName,
  TextPrice,
  ViewEachCryptos,
  ViewHorizontal,
  ViewImageandText,
  ViewPrices,
} from './styles';

const CryptoList = ({cryptos, navigation}): JSX.Element => (
  <FlatListCustom
    data={cryptos}
    keyExtractor={({id}: number) => id}
    ListEmptyComponent={<NoCryptos />}
    ListFooterComponent={<ButonAddCrypto navigation={navigation} />}
    renderItem={({item}: any): JSX.Element => (
      <ListCryptos>
        <ListCryptos>
          <ViewEachCryptos>
            <ViewImageandText>
              <ImageCrypto source={{uri: item.src}} />
              <ViewHorizontal>
                <TextName>{item.name}</TextName>
                <TextCode>{item.code}</TextCode>
              </ViewHorizontal>
            </ViewImageandText>
            <ViewPrices>
              <TextPrice> $ {item.price}</TextPrice>
              {item.change > 0 ? (
                <TextChange positive>
                  <MaterialIcons
                    name="north-east"
                    size={15}
                    color={`${colors.green}`}
                  />
                  {item.change}%
                </TextChange>
              ) : (
                <TextChange>
                  <MaterialIcons
                    name="south-west"
                    size={15}
                    color={`${colors.red}`}
                  />
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

export default CryptoList;
