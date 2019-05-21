import React, { Component } from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            loggedIn:false,
            email:"",
            password:"",
            userName:"",
            message:"",
            messages:[{name:"bill",message:"hello"},{name:"mike",message:"holy shit this works"}]
        }
    }
    handleSubmit=e=>{
        this.setState({
            loggedIn:true,
            userName:e.target.id
        })
    }
    handleFormSubmit=e=>{
        this.setState({
            loggedIn:true,
            
        })
    }
    handleLogout=e=>{
        this.setState({
            loggedIn:false,
            userName:""
        })
    }
    handleChange=e=>{
        this.setState({
            [e.target.id]:[e.target.value]
        })
    }
    handleNewMessage=e=>{
        e.preventDefault()
        const newArray=[{name:this.state.userName,message:this.state.message},...this.state.messages]
        this.setState({
            messages:newArray,
            message:""
        })
    }
    render(){
        if(this.state.loggedIn){
    return(
        <div>
            <h1>You are now logged in as {this.state.userName}</h1>
            <button onClick={this.handleLogout}>Log Out</button>
            <form onSubmit={this.handleNewMessage}>
            <input id="message" onChange={this.handleChange} placeholder="Send everyone a message!" value={this.state.message}></input>
            </form>
            <div>
                <h3>Previous Messages</h3>
                <div>
                    {this.state.messages.map(message=>(
                        <div>
                        {message.message} from {message.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
        }else{
            return(
            <div>
                <h1>Register Here</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input id="email" onChange={this.handleChange} placeholder="Your Email" type="email" value={this.state.email}></input><br/>
                    <input id="userName" onChange={this.handleChange} placeholder="Choose a Username" value={this.state.userName}></input><br />
                    <input id="password" onChange={this.handleChange} placeholder="Choose a password" type="password" value ={this.state.password}></input><br/>
                    <button type="submit">Register</button>
                </form><br/>
                <button id="Guest" onClick={this.handleSubmit}>Log me in as a guest</button>
                
            </div>
            )
        }
}
}
export default App