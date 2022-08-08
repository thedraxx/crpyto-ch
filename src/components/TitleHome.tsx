import React from 'react';
import {
  CustomImage,
  TitleScreen,
  ViewTitleStack,
} from '../styles/TitleHomeStyles';

const TitleHome = () => (
  <ViewTitleStack>
    <CustomImage source={require('../photos/stock.jpg')} />
    <TitleScreen>CryptoCurrencies</TitleScreen>
  </ViewTitleStack>
);

export default TitleHome;
