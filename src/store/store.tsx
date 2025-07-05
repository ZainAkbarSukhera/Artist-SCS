// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import themeConfigSlice from './themeConfigSlice';

// const rootReducer = combineReducers({
//     themeConfig: themeConfigSlice,
// });

// export default configureStore({
//     reducer: rootReducer,
// });

// export type IRootState = ReturnType<typeof rootReducer>;
// store.ts
import { configureStore } from '@reduxjs/toolkit';
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
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // only persist user, not themeConfig
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// ✅ Strong typing support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
