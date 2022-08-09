import React from 'react';
import {
  CustomImage,
  TitleScreen,
  ViewTitleStack,
} from '../styles/TitleHomeStyles';

const TitleHome = (): JSX.Element => (
  <ViewTitleStack>
    <CustomImage source={require('../photos/stock.jpg')} />
    <TitleScreen>CryptoTracker Pro</TitleScreen>
  </ViewTitleStack>
);

export default TitleHome;
