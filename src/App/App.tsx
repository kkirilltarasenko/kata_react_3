import React, { useEffect } from 'react';
/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux-config/store';
/* Synchronize Actions  */
import { deactivateAllFilters } from '../redux-config/reducers/filterReducer/filterActions';
import { deactivateAllTabs } from '../redux-config/reducers/tabsReducer/tabsActions';
import {
  clearTicketsByFilter,
  filledTickets,
} from '../redux-config/reducers/fullFilledTicketsReducer/fullFilledTicketsAction';
/* Async Actions */
import { fetchSearchId } from '../redux-config/reducers/searchIdReducer/searchIdReducer';
import { fetchTickets } from '../redux-config/reducers/ticketsReducer/ticketsReducer';
/* Styles */
import './App.scss';
/* Components */
import Logo from '../Logo/Logo';
import Tabs from '../Tabs/Tabs';
import Filters from '../Filters/Filters';
import Tickets from '../Tickets/Tickets';
import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';
import ClearButton from '../ClearButton/ClearButton';

function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const ticketsToShow: Ticket[] = useSelector(
    (state: RootState) => state.ticketsToShow.ticketsToShow
  );

  useEffect(() => {
    const _tickets: Ticket[] = [];
    async function fetchAPI(): Promise<void> {
      const searchId = await dispatch(fetchSearchId());
      let tickets;
      while (tickets === undefined) {
        tickets = await dispatch(fetchTickets({ searchId: searchId.payload.searchId }));
        if (tickets.payload.tickets !== undefined) {
          _tickets.push(...tickets.payload.tickets);
        }
      }
      while (tickets.payload.stop === false) {
        tickets = await dispatch(fetchTickets({ searchId: searchId.payload.searchId }));
        if (tickets.payload.tickets !== undefined) {
          _tickets.push(...tickets.payload.tickets);
        }
      }

      dispatch(filledTickets(_tickets));
    }

    void fetchAPI();
  }, [dispatch]);

  const removeAll = (): void => {
    dispatch(deactivateAllFilters());
    dispatch(deactivateAllTabs());
    dispatch(clearTicketsByFilter(ticketsToShow));
  };

  return (
    <div className="App">
      <Logo marginTop={50} marginBottom={50} />
      <div className="App__page">
        <div className="App__sidebar">
          <Filters />
          <ClearButton
            body={'Сбросить фильтры'}
            onClick={() => {
              removeAll();
            }}
          />
        </div>
        <div className="App__container">
          <Tabs />
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default App;
