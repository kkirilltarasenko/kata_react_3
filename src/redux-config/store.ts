import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { firstReducer } from './reducers/firstReducer';

const rootReducer = combineReducers({
  first: firstReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
