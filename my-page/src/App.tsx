import React from 'react';
import './App.css';
import data from './data.json';
import { Data } from './Data';
import { FooterComponent } from './FooterComponent';

const App = () => {
  const callback = (url: string) => {
    console.log(`redirecting user to the next ${url}`)
  };

  return (
    <div className="App">
      <header className="App-header">
        <Data data={data.firstName} />
        <Data data={data.email} />
        <Data data={data.phone} />
      </header>
      <footer>
        <FooterComponent
          text={'lorem...'}
          url={'https://www.google.com/'}
          callback={callback}
        />
      </footer>
    </div>
  );
};

export default App;
