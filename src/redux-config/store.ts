import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tabsReducer } from './reducers/tabsReducer/tabsReducer';
import { filterReducer } from './reducers/filterReducer/filterReducer';
import { searchIdSlice } from './reducers/searchIdReducer/searchIdReducer';
import { ticketsSlice } from './reducers/ticketsReducer/ticketsReducer';
import { ticketsToShowReducer } from './reducers/ticketsToShowReducer/ticketsToShowReducer';
import { fullFilledTicketsReducer } from './reducers/fullFilledTicketsReducer/fullFilledTicketsReducer';
import { indexReducer } from './reducers/indexReducer/indexReducer';

const rootReducer = combineReducers({
  tabs: tabsReducer,
  filters: filterReducer,
  searchId: searchIdSlice.reducer,
  tickets: ticketsSlice.reducer,
  ticketsToShow: ticketsToShowReducer,
  fullFilledTickets: fullFilledTicketsReducer,
  index: indexReducer,
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
export type AppDispatch = typeof store.dispatch;
