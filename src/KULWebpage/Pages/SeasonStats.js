import React from 'react'
import '../Stats/Season/SeasonStats.json'
let SeasonStatData = require('../Stats/Season/SeasonStats.json')

function SeasonStats(){
    const [inputField,updateField]= React.useState("")
    //style  
    const rowStyleHeader = {display:"flex",backgroundColor:"lightBlue", border:"2px solid black",justifyContent:"center"}
    const rowStyleBody = {display:"flex",backgroundColor:"white",opacity:"0.8", border:"2px solid black",justifyContent:"center"}
    const styleCellShort = {border:"2px solid grey",color:"black"}
    const styleCell = {border:"2px solid grey",color:"black"}
    const filteredPlayerResults = SeasonStatData.filter(player=>(
        player.Player.toLowerCase().includes(inputField.toLowerCase())
      ))
    const handleChange=e=>{
        updateField(e.target.value)
      }
      
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1>Stats By Season</h1>
        <input placeholder="Type your name!" onChange= {handleChange} value={inputField}></input>
   
      <div style={{width:"98%"}}>
          <div style={rowStyleHeader}>
            <div class="col-3" style={styleCell}>Season</div>
            <div class="col-3" style={styleCell}>Player</div>
            
            <div class="col-1" style={styleCellShort}>Assists</div>
            <div class="col-1" style={styleCellShort}>Goals</div>
            <div class="col-1" style={styleCellShort}>Ds</div>
          </div>
        {filteredPlayerResults.map(x=>(
          <div class="tr" id={Math.random()} style={rowStyleBody}>
            <div class="col-3" style={styleCell}>{x.Season}</div>
            <div class="col-3" style={styleCell}>{x.Player}</div>
            
            <div class="col-1" style={styleCellShort}>{x.Assists}</div>
            <div class="col-1" style={styleCellShort}>{x.Goals}</div>
            <div class="col-1" style={styleCellShort}>{x.Ds}</div>
          </div>
        ))}
       </div>    
       </div>  
    )
}
export default SeasonStats