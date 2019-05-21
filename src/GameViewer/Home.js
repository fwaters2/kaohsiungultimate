import React, { Component } from 'react'
import App from './App'
import GameCard from './GameCard'


class Home extends Component {
    
    constructor(props){
        super(props)
        this.state={
            gameID:false
        }
    }
    handleClick=e=>{
        this.setState({
            gameID:e
        })
    }
    reset = e =>{
        this.setState({
            gameID:false
        })
    }
    render(){
        //style props
        const rowStyleHeader = {display:"flex",backgroundColor:"darkBlue", border:"2px solid black",justifyContent:"center"}
        const rowStyleBody = {display:"flex",backgroundColor:"white",opacity:"0.8", border:"2px solid black",justifyContent:"center"}
        const styleCellShort = {border:"2px solid grey",color:"red"}
        const styleCell = {border:"2px solid grey",color:"red"}

        if(this.state.gameID){
        return(  
            <div>
               
                <GameCard 
                gameID={this.state.gameID}
                reset={this.reset}
                rowStyleHeader={rowStyleHeader}
                rowStyleBody={rowStyleBody}
                styleCellShort={styleCellShort}
                styleCell={styleCell}
                />
                </div>
        )
        }else{
            return(
            <App gameIdChooser={this.handleClick}
                rowStyleHeader={rowStyleHeader}
                rowStyleBody={rowStyleBody}
                styleCellShort={styleCellShort}
                styleCell={styleCell}
            />
            )
        }
    }
}
export default Home