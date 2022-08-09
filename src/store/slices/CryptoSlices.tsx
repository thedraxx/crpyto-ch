import {createSlice} from '@reduxjs/toolkit';

export const CryptoSlice = createSlice({
  // initialState
  name: 'cryptos',
  initialState: {
    // it is the state of the application when the app is started
    cripto: [],
  },
  // reducer is the function that will be called when the action is dispatched
  reducers: {},
});
// export the reducers
export const {} = CryptoSlice.actions;
