import {Props} from '../interfaces/Interfaces';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

function ViewCryptos() {
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
      // If value is not null, set the value in the state, else set an null
      .then(value => (value ? setCryptos(JSON.parse(value)) : null));
  }, [cripto]);

  console.log(cryptos);

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
          <Text>No Cryptos</Text>
        ) // If the data is empty, render a message
      }
    </>
  );
}

export default ViewCryptos;

// Styled-Components
const ListCryptos = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`;

const ViewEachCryptos = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

const ViewImageandText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ViewHorizontal = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
`;
const ViewPrices = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  justify-content: space-around;
`;

const ImageCrypto = styled.Image`
  width: 50px;
  height: 50px;
`;

const HorizontalView = styled.View`
  border-bottom-width: 1px;
  margin-top: 25px;
  border-bottom-color: #d7d7d7;
`;

const TextPrice = styled.Text`
  text-align: right;
  color: 'black';
`;

const TextChange = styled.Text`
  text-align: right;
  color: 'green';
`;
