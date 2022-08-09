import React from 'react';
import {ImageCustom, TitleApp, ViewTitleStack} from '../styles/NavHome';

const NavHome = (): JSX.Element => (
  <ViewTitleStack>
    <ImageCustom source={require('../photos/stock.jpg')} />
    <TitleApp>CryptoTracker Pro</TitleApp>
  </ViewTitleStack>
);

export default NavHome;
