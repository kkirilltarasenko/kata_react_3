import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const cash = useSelector((state: RootState) => state);
  console.log(cash.first.value);

  const firstFunc = (): void => {
    dispatch({ type: 'Increment', value: 1 });
  };

  const secondFunc = (): void => {
    dispatch({ type: 'Decrement', value: 1 });
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          firstFunc();
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          secondFunc();
        }}
      >
        2
      </button>
    </div>
  );
}

export default App;
