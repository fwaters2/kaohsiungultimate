import React from 'react'
import StorePlay from './StorePlay'
import AHomePage from './AHomePage';

function StateStore(props){
const [ThisIs] = React.useState("Heeyo!")
const [AnotherProp] = React.useState("Heeyo, Another prop!")
const [user,changeUser] = React.useState("Passed from Store")

const propsCombined = {prop1:ThisIs,prop2:AnotherProp,userName:user,changeUser:handleChange}
function handleChange(changes){
    console.log("inside the function")
    console.log(changes)
    changeUser(changes)
}

return(
    <div>
 <StorePlay stateStore={propsCombined} />
 <AHomePage stateStore={propsCombined} />
 </div>
)
}
export default StateStore