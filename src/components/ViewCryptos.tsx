import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    [x: string]: any;
    name: string,
    code: number,
    src: string,
    price: number,
    change: number
}

export const ViewCryptos = () => {

    // use UseState to store the cryptos in the state
    const [cryptos, setCryptos] = useState<Props[]>([]);

    // Read the data from the store
    const { cripto } = useSelector((state: Props) => state.cripto);

    // useEffect to save the data in the async storage  
    useEffect(() => {
        AsyncStorage.setItem('cripto', JSON.stringify(cripto));
        AsyncStorage.getItem('cripto').then(value => setCryptos(JSON.parse(value)))
    }, [cripto])

    return (
        //  If the data is not empty, render the data
        (cryptos !== undefined || cryptos !== null) ? (
            // using a .map function to render the data
            cryptos.map((cry: any) => (
                <View key={cry._id}>
                    <ListCryptos>
                        <ViewEachCryptos>
                            <ViewImageandText>
                                <ImageCrypto source={require('../assets/bitcoin.png')} />
                                <ViewHorizontal >
                                    {/* Name of Crypto */}
                                    <Text>{cry.name}</Text>
                                    {/* code of crypto */}
                                    <Text>{cry.code}</Text>
                                </ViewHorizontal>
                            </ViewImageandText>
                            <ViewPrices>
                                <Text style={{ textAlign: 'right' }}>{cry.price}</Text>
                                {/*! This icon DOESENT WORK!!   */}
                                <Text style={{ textAlign: 'right' }}><Icon name="line-chart" size={25} color="#ff0000" />{cry.change}</Text>
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