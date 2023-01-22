import React from 'react';
import './App.scss';
/* Components */
import Logo from '../Logo/Logo';
import FilterTabs from '../FilterTabs/FilterTabs';

function App(): JSX.Element {
  return (
    <div className="App">
      <Logo marginTop={50} marginBottom={50} />
      <FilterTabs />
    </div>
  );
}

export default App;
