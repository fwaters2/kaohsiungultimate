import React, {Component} from 'react'

class Profile extends Component{
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
    return(
        <div className="dropMenu">
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
}
}
export default Profile