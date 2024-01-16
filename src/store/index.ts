import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';

import { priceApi } from './api/price.api';
import { priceReducer } from './slices/price.slice';
import { formReducer } from './slices/form.slice';

const rootReducer = combineReducers({
  [priceApi.reducerPath]: priceApi.reducer,
  price: priceReducer,
  form: formReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(priceApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

setupListeners(store.dispatch);

export default store;
