import React, { Component } from 'react'
import Home from './Pages/Home'
import Guidelines from './Pages/Guidelines'
import SeasonStats from './Pages/SeasonStats'
import CareerStats from './Pages/CareerStats'
import GameViewer from '../GameViewer/Home'
import GameSched from '../GameSched/App'
import Error from './Pages/Error'
class Router extends Component{
    render(){
        if(this.props.appState.page==="Home"){
            return(<Home />)
        }if(this.props.appState.page==="Guidelines"){
            return(<Guidelines />)
        }if(this.props.appState.page==="CareerStats"){
            return(<CareerStats />)
        }if(this.props.appState.page==="SeasonStats"){
            return(<SeasonStats />)
        }if(this.props.appState.page==="GameViewer"){
            return(<GameViewer />)
        }if(this.props.appState.page==="GameSched"){
            return(<GameSched />)
        }else{
            return(<Error />)
        }
    }
}
export default Router