import React from 'react';
import Navigation from './Navigation.js'
import './App.css';
import Signature from './Signature'
import Home from './Home'
import Router from './Router'

function App(){
  return (
    <div className="App-background"> 
      <header> 
         <Navigation />
      </header>
      <Router />
      <footer>
        <Signature />
      </footer>
    </div>
  );
}

export default App;
