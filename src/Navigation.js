import React, { Component } from 'react'
import logo from './Images/vectorpaint.svg'
import menu from './Images/icons8-menu.svg'

class Navigation extends Component{
    constructor(props){
        super(props)
        this.state={
            menuClicked:false
        }
    }
    toggleMenu = e=>{
        if(this.state.menuClicked){
            this.setState({
                menuClicked:false
            })
        }else{
            this.setState({menuClicked:true})
        }
    }
    render(){
        if(this.state.menuClicked){
            return(
                <div style={{display:"flex",flexDirection:"column"}}>
<div className="navbar">
        <img className="navLogo" src={logo} />
        <h4>Kaohsiung Ultimate League</h4>
        <img onClick={this.toggleMenu} className="navMenu" src={menu} />
    </div>
    <div className="dropMenu">
        <ul>KUL Info</ul>
                <li>A thing</li>
                <li>Another thing</li>
        <ul>KUL Stats</ul>
        <li>KUL Card Deals</li>
    </div>
    
</div>
            )
        }else{
return(
    <div className="navbar">
        <img className="navLogo" src={logo} />
        <h4>Kaohsiung Ultimate League</h4>
        <img onClick={this.toggleMenu} className="navMenu" src={menu} />
    </div>
)
        }
}
}
export default Navigation