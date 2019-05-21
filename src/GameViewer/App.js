import React from 'react';
import './App.css';
import './GameResults.json'

let GameResults = require('./GameResults.json')

function App(props) {
const [title] = React.useState("KUL GameViewer")
const [team,updateTeam] = React.useState("")
const filteredGameResults = GameResults.filter(game=>(
  game.Winner.toLowerCase().includes(team.toLowerCase())||game.Loser.toLowerCase().includes(team.toLowerCase())
))

function handleClick(e){
  props.gameIdChooser(e.target.id)
}
const handleChange=e=>{
  updateTeam(e.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{padding:"3px",border:"2px solid black",backgroundColor:"white",color:"black"}}>       
       {title}
      </h1>
      <input placeholder="Filter by Team" onChange= {handleChange} value={team}></input>
   
      <div style={{width:"95%"}}>
          <div style={props.rowStyleHeader}>
            <div class="col-1" style={props.styleCellShort}>#</div>
            <div class="col-3" style={props.styleCell}>Season</div>
            <div class="col-3" style={props.styleCell}>Winner</div>
            <div class="col-1" style={props.styleCellShort}>Pts</div>
            <div class="col-3" style={props.styleCell}>Loser</div>
            <div class="col-1" style={props.styleCellShort}>Pts</div>
          </div>
        {filteredGameResults.map(x=>(
          <div class="tr" id={x.GameID} onClick= {handleClick} style={props.rowStyleBody}>
            <div class="col-1" id={x.GameID} style={props.styleCellShort}>{x.Game}</div>
            <div class="col-3" id={x.GameID} style={props.styleCell}>{x.Season}</div>
            <div class="col-3" id={x.GameID} style={props.styleCell}>{x.Winner}</div>
            <div class="col-1" id={x.GameID} style={props.styleCellShort}>{x.Score}</div>
            <div class="col-3" id={x.GameID} style={props.styleCell}>{x.Loser}</div>
            <div class="col-1" id={x.GameID} style={props.styleCellShort}>{x.Score__1}</div>
          </div>
        ))}
       </div>      
            
      </header>
    </div>
  );
}

export default App;
