import React from 'react'


function StorePlay(props){
const [user,changeUser] = React.useState("")
const [ThisIs] = React.useState("athing")
const [passedProp1] = React.useState(props.stateStore.prop1)
const [passedProp2] = React.useState(props.stateStore.prop2)
const [passedUser] = React.useState(props.stateStore.userName)
//const [passedChangeUser] = React.useState(props.stateStore.changeUser)
const handleChange=(e)=>{
    changeUser(e.target.value)
    props.stateStore.changeUser(e.target.value)
}

 return(
     <div><div>StorePlay is rendered with: <br/>
     from State: {ThisIs}<br/>
     from the state store (props):{passedProp1}</div>
     <div>Multiple Props: <br/>
     Prop1:  {user}<br/>
     Prop2:{props.stateStore.userName}
     </div>
     You are Currently logged in as: {passedUser}
     <input onChange={handleChange} value={user} placeholder="Who you be?" />
     <button>Go to Home Page </button>
     <button>Go to Another Page</button>
     </div>
 )
}
export default StorePlay