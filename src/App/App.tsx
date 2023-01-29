import React, { useEffect } from 'react';
/* Redux */
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux-config/store';
/* Async Actions */
import { fetchSearchId } from '../redux-config/reducers/searchIdReducer/searchIdReducer';
import { fetchTickets } from '../redux-config/reducers/ticketsReducer/ticketsReducer';
import './App.scss';
/* Components */
import Logo from '../Logo/Logo';
import Tabs from '../Tabs/Tabs';
import Filter from '../Filter/Filter';

function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchAPI(): Promise<void> {
      const searchId = await dispatch(fetchSearchId());
      let tickets;
      while (tickets === undefined) {
        tickets = await dispatch(fetchTickets({ searchId: searchId.payload.searchId }));
      }
      while (tickets.payload.stop === false) {
        tickets = await dispatch(fetchTickets({ searchId: searchId.payload.searchId }));
      }
    }

    void fetchAPI();
  }, [dispatch]);

  return (
    <div className="App">
      <Logo marginTop={50} marginBottom={50} />
      <div className="App__container">
        <Filter />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
