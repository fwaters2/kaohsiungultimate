import React from 'react'
import './App.css'
import './csvjson.json'

const gameStats = require('./csvjson.json')

function GameCard(props){
    const filteredStats = gameStats.filter(item =>(
        item.GameID==props.gameID
    ))
    return(
        <div className="App">
            <header style={{color:"black"}} className="App-header">  
                Game Card <br />{props.gameID} <button onClick={props.reset}>Back</button>
                
                
                <div style={{width:"95%"}}>
          <div style={props.rowStyleHeader}>
          <div class="col-1" style={props.styleCellShort}>Goal#</div>
            <div class="col-3" style={props.styleCell}>Team</div>
            <div class="col-3" style={props.styleCell}>Assist</div>
            <div class="col-3" style={props.styleCell}>Goal</div>
         
          </div>
          <div>
                    {filteredStats.map(goal=>(
                    <div style={props.rowStyleBody}>
                        <div class="col-1" style={props.styleCellShort}>{goal.GoalNum}</div>
                        <div class="col-3" style={props.styleCell}>{goal.Team}</div>
                        <div class="col-3" style={props.styleCell}>{goal.Assist}</div>
                        <div class="col-3" style={props.styleCell}>{goal.Goal}</div>
                    </div>
                    ))}
                    </div>
                </div>
            </header>
        </div>
    )
}
export default GameCard