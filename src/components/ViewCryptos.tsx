import { Text, View } from 'react-native';
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

interface Props {
    [x: string]: any;
    _id: number;
    name: string,
    code: number,
    src: string,
    price: number,
    change: number
}

export const ViewCryptos = (): JSX.Element | JSX.Element[] => {

    // use UseState to store the cryptos in the state
    const [cryptos, setCryptos] = useState<Props[] | []>([]);

    // Read the data from the store
    const { cripto } = useSelector((state: Props) => state.cripto);

    // useEffect to save the data in the async storage  
    useEffect(() => {
        // Set the data in the storage
        AsyncStorage.setItem('cripto', JSON.stringify(cripto));
        // Get the data from the storage and send to cryptos
        AsyncStorage.getItem('cripto')
            .then((value) => (value ? setCryptos(JSON.parse(value)) : null))
    }, [cripto])

    return (
        //  If the data is not empty, render the data
        (cryptos !== undefined || cryptos !== null) ? (
            // using a .map function to render the data
            cryptos.map((cry:Props): JSX.Element => (
                <View key={cry._id}>
                    <ListCryptos>
                        <ViewEachCryptos>
                            <ViewImageandText>
                                {/* !!! This image need to be replace for cry.src  */}
                                <ImageCrypto source={require('../assets/bitcoin.png')} />
                                <ViewHorizontal >
                                    {/* Name of Crypto */}
                                    <Text style={{ color: 'black' }}>{cry.name}</Text>
                                    {/* code of crypto */}
                                    <Text style={{ color: 'black' }}>{cry.code}</Text>
                                </ViewHorizontal>
                            </ViewImageandText>
                            <ViewPrices>
                                <Text style={{ textAlign: 'right', color: 'black' }}>{cry.price}</Text>
                                {/*! This icon DOESENT WORK!!   */}
                                <Text style={{ textAlign: 'right', color: 'green' }}><AntDesign name="areachart" size={20} color='green' />{cry.change}</Text>
                            </ViewPrices>
                        </ViewEachCryptos>
                        <HorizontalView />
                    </ListCryptos>
                </View>
            )))
            :
            // If the data is empty, render a message
            (<Text>No Cryptos</Text>))
};

// Styled-Components
const ListCryptos = styled.View`
  display: flex;
  flex:1;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`;

const ViewEachCryptos = styled.View`
  display: flex;
  flex:1;
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
     flex:1;
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
    border-Bottom-Width: 1px;
    margin-Top: 25px;
    border-Bottom-Color: #d7d7d7;
`