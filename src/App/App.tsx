import React from 'react';
import './App.scss';
/* Components */
import Logo from '../Logo/Logo';
import Tabs from '../Tabs/Tabs';
import Filter from '../Filter/Filter';

function App(): JSX.Element {
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
