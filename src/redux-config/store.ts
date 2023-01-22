import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterTabsReducer } from './reducers/filterTabsReducer';

const rootReducer = combineReducers({
  tabsReducer: filterTabsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
