import { createSlice } from '@reduxjs/toolkit';

export const CryptoSlice = createSlice({
    // initialState is the default state of the application, in this case for example its hardcoded 
    name: 'cryptos',
    initialState: {
        cripto: [{  _id: new Date().getTime(),
            name: 'Bitcoin',
            code: 'BTC',
            src: '../assets/bitcoin.png',
            price: 1000000,
            change: 1.82
        }]
    },
      //    reducer is the function that will be called when the action is dispatched
    reducers: {}
});


// export the reducers
export const {} = CryptoSlice.actions;