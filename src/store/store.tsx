import {configureStore} from '@reduxjs/toolkit';
import {CryptoSlice} from './slices/CryptoSlices';

//  Configure the store
export const store = configureStore({
  reducer: {
    crypto: CryptoSlice.reducer,
  },
});
