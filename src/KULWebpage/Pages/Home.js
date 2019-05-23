import React from 'react'
import '../App.css'

function Home(){
    function handleClick1(e){
        window.location='https://docs.google.com/forms/d/e/1FAIpQLSeuhS4ZHOkSjcUoRKYuiCiaVN9LQLEsydDcrelGHdIMAQtDeg/'
    }
    function handleClick2(e){
        window.location='https://www.facebook.com/groups/511347315642408/'
    }
    return(
<body className="home">
        <h1>Welcome to KUL</h1>
        <button onClick={handleClick1}>Notify Me for Fall Registration</button>
        <button onClick={handleClick2} style={{backgroundColor:"lightBlue"}}>Find us on Facebook</button>
      </body>
    )
}
export default Home