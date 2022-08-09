import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
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
  FlatListCustom,
} from '../styles/CryptoListStyles';

const CryptoList = ({cryptos}: Props) => {
  const [isSometing, setIsSometing] = useState(false);

  useEffect(() => {
    if (cryptos.length > 0) {
      setIsSometing(true);
    } else {
      setIsSometing(false);
    }
  }, [cryptos]);

  const NoCryptos = () => {
    return (
      <ListCryptos>
        <TextNoCryptos>Nothing to see</TextNoCryptos>
      </ListCryptos>
    );
  };

  return (
    <>
      <FlatListCustom
        data={cryptos}
        keyExtractor={item => item.id}
        ListEmptyComponent={isSometing ? null : NoCryptos}
        renderItem={({item}) => (
          <ListCryptos>
            <ListCryptos>
              <ViewEachCryptos>
                <ViewImageandText>
                  {console.log('hay algo')}

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
    </>
  );
};

export default CryptoList;
