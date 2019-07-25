import React from 'react';
import Navigation from './Navigation.js'
import './App.css';
import Signature from './Signature'

import Router from './Router'

function App(props){
//Different App States and how to update them
const [page,updatePage] = React.useState("Home")
const [loggedIn,toggleLogIn] = React.useState(false)
const [user,updateUser] = React.useState("Guest")
const [role,updateRole] = React.useState("Guest")
//This will be the state of the ENTIRE APP
const appState={page:page,changePage:changePage,loggedIn:loggedIn,isLoggedIn:isLoggedIn,userName:user,changeUser:changeUser,role:role}

//Update App State
function changePage(newPage){
  updatePage(newPage)
}
function isLoggedIn(userUpdate){
  toggleLogIn(userUpdate)
}
function changeUser(user){
  updateUser(user)
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
