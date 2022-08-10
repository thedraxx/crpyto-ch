import {createSlice} from '@reduxjs/toolkit';

export const CryptoSlice = createSlice({
  name: 'cryptos',
  initialState: {
    crypto: [
      {
        id: Math.random(),
        name: 'Bitcoin',
        code: 'BTC',
        src: 'https://i.postimg.cc/jjpZGdGx/btc.png',
        price: 7215.68,
        change: 1.82,
      },
      {
        id: Math.random(),
        name: 'Ethereum',
        code: 'ETH',
        src: 'https://i.postimg.cc/nVY0PxTx/ethereum.png',
        price: 146.83,
        change: 1.46,
      },
      {
        id: Math.random(),
        name: 'XRP',
        code: 'XRP',
        src: 'https://i.postimg.cc/nLD1YfM6/xrp.png',
        price: 0.220568,
        change: -2.47,
      },
    ],
    navegacion: false,
  },
  reducers: {
    changeNavigation: state => {
      state.navegacion = !state.navegacion;
    },
  },
});
export const {} = CryptoSlice.actions;
