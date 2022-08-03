import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

export const ViewCryptos = () => {
    return (
        <ListCryptos>
            <ViewEachCryptos>
                <ImageCrypto source={require('../assets/bitcoin.png')}  />
                <ViewHorizontal>
                    <Text >Crypto Name</Text>
                    <Text>Crypto mininame</Text>
                </ViewHorizontal>

                <ViewPrices>
                    <Text style={{textAlign: 'right'}}>$1000000</Text>
                    <Text style={{textAlign: 'center'}}>1.82%</Text>
                </ViewPrices>
            </ViewEachCryptos>
        </ListCryptos>
    );
};

const ListCryptos = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 10px;
`;

const ViewEachCryptos = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ViewHorizontal = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
`
const ViewPrices = styled.View`
     display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    justify-content: space-around;
`

const ImageCrypto = styled.Image`
    width: 50px;
    height: 50px;
`