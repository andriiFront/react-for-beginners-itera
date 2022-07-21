import React from 'react';
import './App.scss';
import data from './data.json';
import { Data } from './Data/Data';
import { FooterComponent } from './FooterComponent/FooterComponent';
import { Ctx } from './Context/context';

const App = () => {
  const callback = (url: string) => {
    console.log(`redirecting user to the next ${url}`)
  };

  return ( 
    <div className="App">
      <header className="App-header">
        <Ctx.Provider value={data}>
          <Data />
          <Data />
          <Data />
        </Ctx.Provider>
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
