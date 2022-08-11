import React from 'react';
import ModalView from '../../components/alerts/ModalView';
import ViewCryptos from '../../components/body/ViewCryptos';
import {ViewHome} from './styles';

const Home = ({navigation}: any): JSX.Element => {
  return (
    <ViewHome>
      <ModalView />
      <ViewCryptos navigation={navigation} />
    </ViewHome>
  );
};
export default Home;
