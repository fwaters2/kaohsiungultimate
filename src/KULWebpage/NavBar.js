import React from 'react'
import logo from '../Images/vectorpaint.svg'
import menu from '../Images/icons8-menu.svg'
import profilePic from '../Images/ic_account_circle_48px-512.png'

function NavBar(props){
    console.log(props)
    return(
        
        <div className="navbar">
            <img  id={"Home"} onClick={props.navState.changePage} alt="logo" className="navLogo" src={logo} />
            <h4>Kaohsiung Ultimate</h4>
            <img onClick={props.navState.toggleMenu} className="navMenu" src={menu} alt="menu" />
            <img onClick={props.navState.toggleProfile}className="navMenu" src={profilePic} alt="profile pic" />
        </div>
    )
}
export default NavBar