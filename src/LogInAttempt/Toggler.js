import React from 'react'

function Toggler(props){
    const handleClick=e=>{
props.toggler(e.target.id)
    }
    return(
        <div style={{display:"flex",flexDirection:"row",backgroundColor:"pink",width:"100%"}}>
            <button style={{width:"50%"}} id="Login" onClick={handleClick}>Login</button>
            <button style={{width:"50%"}} id="Register" onClick={handleClick}>Register</button>
        </div>
    )
}
export default Toggler