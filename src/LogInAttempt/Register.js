import React, { Component } from 'react'
import '../KULWebpage/App.css'
import Profile from './Profile'
class Register extends Component{
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
   e.preventDefault()
   this.setState({
    loggedIn:true,
    
})
        this.props.navState.changeUser(this.state.userName)
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
      <Profile />
  )
        }else{
            return(
            <div className="dropMenu">
                <h1>Register Here</h1>
                <form onSubmit={this.handleSubmit}>
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
export default Register