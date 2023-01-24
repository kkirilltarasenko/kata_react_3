import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tabsReducer } from './reducers/tabsReducer/tabsReducer';
import { filterReducer } from './reducers/filterReducer/filterReducer';

const rootReducer = combineReducers({
  tabs: tabsReducer,
  filters: filterReducer,
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
