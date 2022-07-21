import React from 'react';
import './App.css';
import { Stopwatch } from './components/Stopwatch/Stopwatch'
import { StopwatchState } from './context/Stopwatch/StopwatchState'

const App = () => {
  return (
    <div className="App">
      <StopwatchState>
        <Stopwatch />
      </StopwatchState>
    </div>
  );
};

export default App;
