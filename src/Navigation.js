import React from 'react'
import logo from './Images/vectorpaint.svg'
import menu from './Images/icons8-menu.svg'

function Navigation(){
return(
    <div className="navbar">
        <img className="navLogo" src={logo} />
        <h4>Kaohsiung Ultimate League</h4>
        <img className="navMenu" src={menu} />
    </div>
)
}
export default Navigation