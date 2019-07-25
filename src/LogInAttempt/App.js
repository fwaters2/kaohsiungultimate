import React, { Component } from 'react'
import '../KULWebpage/App.css'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import Toggler from './Toggler'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            display:"Login"
        }
    }
    toggler=display=>{
       
        this.setState({
            display:display
        })
    }

    render(){
        if(this.props.navState.loggedIn){
            return(
            <Profile />
            )
        }if(this.state.display==="Login"){       
    return(
        <div>
            <Login />
            <Toggler toggler={this.toggler}/>
        </div>
    )
        }if(this.state.display==="Register"){
            return(
                <div>   
        <Register navState={this.props.navState}/>
        <Toggler toggler={this.toggler}/>
        </div>
            )
        }else{
            return(
                <div>I done Fucked it up</div>
            )
        }
    }
}
export default App