import React, { Component } from 'react'
import App from './KULWebpage/App'
import GVHome from './GameViewer/Home'
import LogInAttempt from './LogInAttempt/App'
import GameSched from './GameSched/App'

class DevPage extends Component{
    constructor(props){
        super(props)
        this.state={
            pageToggler:""
        }
    }
    handleToggler=(e)=>{
        this.setState({
                pageToggler:e.target.id
            })
        
    }
    render(){
        if(this.state.pageToggler==="Home"){
            return(
                <App />
            )
        }if(this.state.pageToggler==="KUL GameViewer"){
            return(
                <GVHome />
            )
        }if(this.state.pageToggler==="LogInAttempt"){
            return(
                <LogInAttempt />
            )
        }if(this.state.pageToggler==="GameSched"){
            return(
                <GameSched />
            )
        }else{
            return(
                <div className="App" >
                    <h1>Development Home Page</h1>
                    
                    <button id="Home" onClick={this.handleToggler}>Recreated KUL webpage</button><br /> <br />
                    <button id="KUL GameViewer" onClick={this.handleToggler}>KUL GameViewer</button><br /> <br />
                    <button id="LogInAttempt" onClick={this.handleToggler}>Webpage with Login functionality <br/> (Under development)</button> <br/><br/>
                    <button id="GameSched" onClick={this.handleToggler}>Calendar for players to update pickups/tourneys (Complete but data doesn't persist)</button> <br/><br/>
                    
                </div>
            )
        }
    }
}
export default DevPage