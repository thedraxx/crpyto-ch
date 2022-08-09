import {createSlice} from '@reduxjs/toolkit';

export const CryptoSlice = createSlice({
  // initialState
  name: 'cryptos',
  initialState: {
    // it is the state of the application when the app is started
    cripto: [
      {
        _id: Math.random(),
        name: 'Bitcoin',
        code: 'BTC',
        src: 'https://www.pngall.com/wp-content/uploads/1/Bitcoin-Free-PNG-Image.png',
        price: 1000000,
        change: 1.82,
      },
      {
        _id: Math.random(),
        name: 'Etherium',
        code: 'ETH',
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png',
        price: 4211000000,
        change: 1.46,
      },
      {
        _id: Math.random(),
        name: 'XRP',
        code: 'XRP',
        src: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=023',
        price: 0.220568,
        change: -2.47,
      },
    ],
  },
  // reducer is the function that will be called when the action is dispatched
  reducers: {},
});
// export the reducers
export const {} = CryptoSlice.actions;
