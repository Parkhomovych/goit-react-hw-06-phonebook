//=============== Before ========================
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReduscer } from './reducer';

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReduscer, enhancer);

//=============== After ========================
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { contactsSlice } from './contactsSlice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
const rootReduscer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReduscer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
