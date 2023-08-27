import { configureStore } from '@reduxjs/toolkit';
import { contactDetailsReducer } from './contactDetailsReducer';

export const store = configureStore({
  reducer: {
    contactDetails: contactDetailsReducer,
  },
});