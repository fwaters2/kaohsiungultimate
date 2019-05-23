import React from 'react'

function AHomePage(props){
    return(
        <div>
            Some Stuff that also needs the same props in a totally different component <br/>
            <div>{props.stateStore.prop1}</div>
            <div>{props.stateStore.userName}</div>
        </div>
    )
}
export default AHomePage