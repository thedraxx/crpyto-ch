import {configureStore} from '@reduxjs/toolkit';
import {CryptoSlice} from './slices/CryptoSlices';

export const store = configureStore({
  reducer: {
    crypto: CryptoSlice.reducer,
  },
});
