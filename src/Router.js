import React, { Component } from 'react'
import Home from './Home'
import Error from './Error'
class Router extends Component{
    constructor(props){
        super(props)
        this.state={
            page:"Home"
        }
    }
    render(){
        if(this.state.page=="Home"){
    return(<Home />)
        }else{
            return(<Error />)
        }
}
}
export default Router