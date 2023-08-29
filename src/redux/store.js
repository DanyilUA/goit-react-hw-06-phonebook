import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};


const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contactDetails: persistedContactReducer,
  },
});

export const persistor = persistStore(store);