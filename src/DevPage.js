import React, { Component } from 'react'
import App from './App'

class DevPage extends Component{
    constructor(props){
        super(props)
        this.state={
            togglerHome:false
        }
    }
    handleToggler=(e)=>{
        if(this.state.togglerHome){
            this.setState({
                togglerHome:false
            })
        }else{
            this.setState({
                togglerHome:true
            })
        }
    }
    render(){
        if(this.state.togglerHome){
            return(
                <App />
            )
        }else{
            return(
                <div className="App" >
                    <h1>Development Home Page</h1>
                    
                    <button onClick={this.handleToggler}>Recreated KUL webpage</button><br /> <br />
                    <button disabled>Webpage with Login functionality <br/> (Under development)</button>
                </div>
            )
        }
    }
}
export default DevPage