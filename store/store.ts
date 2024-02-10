import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countryAPI } from "services/CountryService";
import countryStateSlice from 'services/CountryState'
import UIStateSlice from 'services/UIService';

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

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [countryAPI.reducerPath],
    // blacklist: [countryAPI.reducerPath, 'countryState'],
}

const rootReducer = combineReducers({
    [countryAPI.reducerPath]: countryAPI.reducer,
    countryState: countryStateSlice,
    UIState: UIStateSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        // reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(countryAPI.middleware)
    })
}

export const store = setupStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];