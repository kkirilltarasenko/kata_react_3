import React, { useEffect } from 'react';
import './App.scss';
/* Components */
import Logo from '../Logo/Logo';
import Tabs from '../Tabs/Tabs';
import Filter from '../Filter/Filter';

import { Ticket } from '../test';

function App(): JSX.Element {
  useEffect(() => {
    async function fetchTickets(): Promise<{ tickets: Ticket[]; stop: boolean }> {
      const searchID: { searchId: string } = await fetch(
        'https://aviasales-test-api.kata.academy/search'
      ).then(async (res) => await res.json());
      return await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchID.searchId}`
      ).then(async (res) => await res.json());
    }

    console.log(fetchTickets());
  });

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
