import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { ViewCryptos } from '../components/ViewCryptos';
import styled from 'styled-components/native';

export const Home = ({ navigation }: any):JSX.Element => {
  return (
    <>
      <ViewHome>
        <ScrollView>
          {/* This shows the data added */}
          <ViewCryptos />
          {/* StyledView for added crypto */}
          <TouchableAddView>
            {/* Bottom to go to add a new crypto */}
            <TouchableAddButton onPress={() => navigation.navigate('AddCrypto')}>
              <Text style={{ fontSize: 20, color: '#b9b9b9' }}> + Add a Cryptocurrency</Text>
            </TouchableAddButton>
          </TouchableAddView>
        </ScrollView>
      </ViewHome>
    </>
  );
};

const TouchableAddButton = styled.TouchableHighlight`
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
`

const TouchableAddView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  top:0 ;
`

const ViewHome = styled.View`
  display: flex;
  flex:1;
  flex-direction: column;
  background-color: white;
`