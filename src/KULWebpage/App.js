import React from 'react';
import Navigation from './Navigation.js'
import './App.css';
import Signature from './Signature'

import Router from './Router'

function App(props){
//This will be the state of the ENTIRE APP
const [page,updatePage] = React.useState("Home")
const [loggedIn,toggleLogIn] = React.useState(false)
const [user,updateUser] = React.useState("Guest")
const [role,updateRole] = React.useState("Guest")
const appState={page:page,changePage:changePage,loggedIn:loggedIn,userName:user,role:role}

//Update App State
function changePage(newPage){
  updatePage(newPage)
}

  return (
    <div className="App-background"> 
      <header> 
        <Navigation appState={appState}/>
      </header>
        <Router appState={appState}/>
      <footer>
        <Signature />
      </footer>
    </div>
  );
}

export default App;
