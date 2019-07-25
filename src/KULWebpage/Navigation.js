import React, { Component } from 'react'
import NavDropdown from './NavDropdown'
import NavBar from './NavBar'
import Login from '../LogInAttempt/App'

class Navigation extends Component{
    constructor(props){
        super(props)
        this.state={
            menuClicked:false,
            profileClicked:false
        }
    }
    toggleMenu = e=>{
        if(this.state.menuClicked){
            this.setState({
                menuClicked:false
            })
        }else{
            this.setState({menuClicked:true,profileClicked:false})
        }
    }
    toggleProfile = e=> {
        
        if(this.state.profileClicked){
            this.setState({
                profileClicked:false,
            })
        }else{
            this.setState({profileClicked:true,menuClicked:false})
        }
        
    }
    changePage=e=>{
        this.props.appState.changePage(e.target.id)
        this.setState({
            menuClicked:false
        })
    }
    
    render(){
        //This will contain the state of Navigation (navbar and dropdowns) along with the state of the rest of the app
    const navState={...this.props.appState,changePage:this.changePage,toggleMenu:this.toggleMenu,toggleProfile:this.toggleProfile}
    
    if(this.state.menuClicked){
            return(
                <div style={{display:"flex",flexDirection:"column"}}>
                    <NavBar navState={navState}/>
                    <NavDropdown changePage={this.changePage}/>
                </div>
            )
        }if(this.state.profileClicked){
            return(
                <div style={{display:"flex",flexDirection:"column"}}>
                    <NavBar navState={navState}/>
                    <Login navState={navState}/>
                </div>
            )
        }else{
            
            return(
                
                <NavBar navState={navState}/>
            )
        }
        
    }
}
export default Navigation