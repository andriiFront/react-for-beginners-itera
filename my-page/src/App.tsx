import React from 'react';
import './App.css';
import data from './data.json';
import { Data } from './Data';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Data data={data.firstName} />
      <Data data={data.email} />
      <Data data={data.phone} />
    </header>
  </div>
);

export default App;
