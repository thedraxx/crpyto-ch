import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ViewCryptos = () => {
    return (
        <ListCryptos>

            <ViewEachCryptos>
                <ViewImageandText>
                    <ImageCrypto source={require('../assets/bitcoin.png')} />
                    <ViewHorizontal >
                        {/* Name of Crypto */}
                        <Text>Bitcoin</Text>
                        {/* code of crypto */}
                        <Text>BTC</Text>
                    </ViewHorizontal>
                </ViewImageandText>
                <ViewPrices>
                    <Text style={{ textAlign: 'right' }}>$1000000</Text>
                    {/*! This icon DOESENT WORK!!   */}
                    <Text style={{ textAlign: 'right' }}><Icon name="bitcoin" size={25} color="#ff0000" /> 1.82%</Text>
                </ViewPrices>
            </ViewEachCryptos>
            <HorizontalView />
        </ListCryptos>
    );
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