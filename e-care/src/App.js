import React from 'react';

// IMPORT ICONS FROM REACT ICONS
import { FcSettings } from 'react-icons/fc';

// CUSTOM CSS
import './App.css';

// IMPORTING NAVBAR
import NavBav from './Components/Partials/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBav />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FcSettings style={{ fontSize: '250px' }} className="App-logo" />
        <p className='text-dark display-4 font-weight-bold'>
          Sorry, we're doing some work on the site......
          {/* This page is <code>Under Construction</code> It'll be up and running soon */}
        </p>
        <code>Thank you for being patient. We're working on the site and will be back shortly. We're preparing something exciting for you.</code>

      </header>
    </div>
  );
}

export default App;
