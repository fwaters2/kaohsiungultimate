import React, {Component} from 'react'

class Login extends Component{
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
     
    handleChange=e=>{
        this.setState({
            [e.target.id]:[e.target.value]
        })
    }
    render(){
    return(
        <div className="dropMenu">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <input id="userName" onChange={this.handleChange} placeholder="Choose a Username" value={this.state.userName}></input><br />
                    <input id="password" onChange={this.handleChange} placeholder="Choose a password" type="password" value ={this.state.password}></input><br/>
                    <button type="submit">Login</button>
                </form><br/>
                
                
            </div>
    
    )
    }
}
export default Login