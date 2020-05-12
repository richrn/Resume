import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Button } from './Components/Button';

var http = require('http');



function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Submit</Button>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Placeholder
          
        </a>
      </header>
    </div>
  )

  }
  ;


export default App;

