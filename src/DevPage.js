import React, { Component } from 'react'
import App from './App'
import GVHome from './GameViewer/Home'

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
        }else{
            return(
                <div className="App" >
                    <h1>Development Home Page</h1>
                    
                    <button id="Home" onClick={this.handleToggler}>Recreated KUL webpage</button><br /> <br />
                    <button id="KUL GameViewer" onClick={this.handleToggler}>KUL GameViewer</button><br /> <br />
                    <button disabled>Webpage with Login functionality <br/> (Under development)</button>
                </div>
            )
        }
    }
}
export default DevPage