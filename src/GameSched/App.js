import React, { Component } from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:"Guest",
            date:"",
            eventName:"",
            otherInfo:"",
            events: [{userName:"Bob",
                    date:"August 24/25",
                    eventName:"Sixes",
                    otherInfo:"Super Fun"},
                    {userName:"Steve",
                    date:"December 24/25",
                    eventName:"Christmas Hat",
                    otherInfo:"Super Jolly"}]
        }
    }
    render(){
        return(
            <div>
                <form>
                    <input placeholder="Date"></input>
                    <input placeholder="Event Name"></input>
                    <input placeholder="Info"></input>
                    <input placeholder="Your Name"></input>
                    <button type="submit">Submit</button>
                </form>

                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Event Name</th>
                            <th>Info</th>
                            <th>Submitted By:</th>
                        </tr>
                        {this.state.events.map(event=>(
                            <tr>
                            <td>{event.date}</td>
                            <td>{event.eventName}</td>
                            <td>{event.otherInfo}</td>
                            <td>{event.userName}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default App