import React from 'react';
import './App.scss';
import { FooterComponent } from './FooterComponent/FooterComponent';
import { About } from './About/About';
import { Link, Outlet } from 'react-router-dom'

export const App = () => {
  const callback = (url: string) => {
    console.log(`redirecting user to the next ${url}`)
  };

  return ( 
    <div className="App">
      <header className="App-header">
        <Link to="">Home</Link>
        <Link to="about">About</Link>
      </header>
      <main>
        <Outlet />
      </main>
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
