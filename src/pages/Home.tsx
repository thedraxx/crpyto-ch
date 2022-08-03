import React from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { ViewCryptos } from '../components/ViewCryptos';
import styled from 'styled-components/native';

export const Home = ({ navigation }: any) => {
  return (
    <ViewHome> 
      <ScrollView>
        {/* This shows the data added */}
        <ViewCryptos />
        <ViewCryptos />
        {/* StyledView for added crypto */}
        <TouchableAddView>
        {/* Bottom to go to add a new crypto */}
        <TouchableAddButton onPress={() => navigation.navigate('AddCrypto')}>
          <Text> Add a Cryptocurrency</Text>
        </TouchableAddButton>
        </TouchableAddView>
      </ScrollView>
    </ViewHome>
  );
};

const TouchableAddButton = styled.TouchableHighlight`
  padding: 10px;
  margin: 10px;
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