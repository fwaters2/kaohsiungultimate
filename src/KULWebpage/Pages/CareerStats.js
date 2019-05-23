import React from 'react'
import '../Stats/Career/CareerStats.json'
let CareerStatData = require('../Stats/Career/CareerStats.json')

function CareerStats(){
    const [dataTable,setDataTable] = React.useState(CareerStatData)
    const [inputField,updateField]= React.useState("")
    //style  
    const rowStyleHeader = {display:"flex",backgroundColor:"lightBlue", border:"2px solid black",justifyContent:"center"}
    const rowStyleBody = {display:"flex",backgroundColor:"white",opacity:"0.8", border:"2px solid black",justifyContent:"center"}
    const styleCellShort = {border:"2px solid grey",color:"black"}
    const styleCell = {border:"2px solid grey",color:"black"}
    const filteredPlayerResults = CareerStatData.filter(player=>(
        player.Player.toLowerCase().includes(inputField.toLowerCase())
      ))
    const handleChange=e=>{
        updateField(e.target.value)
      }
    const handleSort=(e)=>{
        const dataParam = e.target.id
        console.log("I need to sort dynamicly")
        
        filteredPlayerResults.sort((a,b)=>(
            b.Goals - a.Goals
        ))
        setDataTable(filteredPlayerResults)

    }
      
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1>Career Stats</h1>
        <input placeholder="Type your name!" onChange= {handleChange} value={inputField}></input>
   
      <div style={{width:"98%"}}>
          <div style={rowStyleHeader}>
            
            <div onClick={handleSort} id="Player" class="col-3" style={styleCell}>Player</div>
            <div onClick={handleSort} id="SeasonsPlayed" class="col-1" style={styleCell}>Seasons</div>
            <div onClick={handleSort} id="Assists" class="col-1" style={styleCellShort}>Assists</div>
            <div onClick={handleSort} id="Goals" class="col-1" style={styleCellShort}>Goals</div>
            <div onClick={handleSort} id="Ds" class="col-1" style={styleCellShort}>Ds</div>
            <div onClick={handleSort} id="TotalStats" class="col-1" style={styleCellShort}>Pts</div>
          </div>
        {dataTable.map(x=>(
          <div class="tr" id={Math.random()} style={rowStyleBody}>
            
            <div class="col-3" style={styleCell}>{x.Player}</div>
            <div class="col-1" style={styleCellShort}>{x.SeasonsPlayed}</div>
            <div class="col-1" style={styleCellShort}>{x.Assists}</div>
            <div class="col-1" style={styleCellShort}>{x.Goals}</div>
            <div class="col-1" style={styleCellShort}>{x.Ds}</div>
            <div class="col-1" style={styleCellShort}>{x.TotalStats}</div>
          </div>
        ))}
       </div>    
       </div>  
    )
}
export default CareerStats