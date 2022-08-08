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
  // use UseState to store the cryptos in the state
  const [cryptos, setCryptos] = useState<Props[] | []>([]);

  // Read the data from the store
  const {cripto} = useSelector((state: Props) => state.cripto);

  // useEffect to save the data in the async storage when cripto change
  useEffect(() => {
    // Set the data in the storage
    AsyncStorage.setItem('cripto', JSON.stringify(cripto));
    // Get the data from the storage and send to cryptos
    AsyncStorage.getItem('cripto')
      // If value is not null, set the value in the state, else set an empty array
      .then(value => (value ? setCryptos(JSON.parse(value)) : null));
  }, [cripto]);

  return (
    <>
      {
        //  If the data is not empty, render the data
        cryptos.length !== 0 ? (
          // using a .map function to render the data
          cryptos.map(
            (cry: Props): JSX.Element => (
              <View key={cry._id}>
                <ListCryptos>
                  <ViewEachCryptos>
                    <ViewImageandText>
                      {/* !!! This image need to be replace for cry.src  */}
                      <ImageCrypto source={{uri: `${cry.src}`}} />
                      <ViewHorizontal>
                        {/* Name of Crypto */}
                        <Text>{cry.name}</Text>
                        {/* code of crypto */}
                        <Text>{cry.code}</Text>
                      </ViewHorizontal>
                    </ViewImageandText>
                    <ViewPrices>
                      <TextPrice>{cry.price}</TextPrice>

                      {/* If the change is positive, render the icon up, else render the icon down */}
                      {cry.change > 0 ? (
                        <TextChange>
                          <AntDesign name="areachart" size={20} color="green" />
                          {cry.change}
                        </TextChange>
                      ) : (
                        <TextChange>
                          <AntDesign name="areachart" size={20} color="red" />
                          {cry.change}
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
        ) // If the data is empty, render a message
      }
    </>
  );
}
export default ViewCryptos;
