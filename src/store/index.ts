import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { locationApi } from '../services/location';

const rootReducer = combineReducers({
  [locationApi.reducerPath]: locationApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware),
});
