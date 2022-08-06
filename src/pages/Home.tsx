import {ScrollView} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import ViewCryptos from '../components/ViewCryptos';

function Home({navigation}: any): JSX.Element {
  return (
    <ViewHome>
      <ScrollView>
        {/* This shows the data added */}
        <ViewCryptos />
        {/* StyledView for added crypto */}
        <TouchableAddView>
          {/* Bottom to go to add a new crypto */}
          <TouchableAddButton onPress={() => navigation.navigate('AddCrypto')}>
            <TextButton> + Add a Cryptocurrency</TextButton>
          </TouchableAddButton>
        </TouchableAddView>
      </ScrollView>
    </ViewHome>
  );
}
export default Home;

const TouchableAddButton = styled.TouchableHighlight`
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
`;

const TouchableAddView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  top: 0;
`;

const ViewHome = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
`;

const TextButton = styled.Text`
  font-size: 20px;
  color: '#b9b9b9';
`;
