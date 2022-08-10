import React from 'react';
import {useDispatch} from 'react-redux';
import ViewCryptos from '../components/ViewCryptos';
import {ViewHome} from '../styles/HomeStyles';
// import ModalView from '../components/ModalView';

const Home = ({navigation}: any): JSX.Element => (
  <ViewHome>
    {/* <ModalView /> */}
    <ViewCryptos navigation={navigation} />
  </ViewHome>
);
export default Home;
