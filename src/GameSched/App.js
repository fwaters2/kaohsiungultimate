import React, { Component } from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:"",
            date:"",
            eventName:"",
            location:"",
            otherInfo:"",
            dateAdded:"",
            events: [{userName:"Bob",
                    date:"2019-08-24",
                    eventName:"Sixes",
                    location:"Pohang, South Korea",
                    otherInfo:"Super Fun",
                    dateAdded:"asd"},
                    {userName:"Steve",
                    date:"2019-12-25",
                    eventName:"Christmas Hat",
                    location:"Taichung, Taiwan",
                    otherInfo:"Super Jolly",
                    dateAdded: "Wed May 22 2019 16:55:04 GMT+0800 (Taipei Standard Time) {}"}]
        }
    }
    handleSubmit=e=>{
        e.preventDefault()
        const newEvent = {userName:this.state.userName,
        date:this.state.date,
        eventName:this.state.eventName,
        location:this.state.location,
        otherInfo:this.state.otherInfo,
        dateAdded:new Date()}
        const addEvent =[...this.state.events,newEvent]
        addEvent.sort((a,b) =>(
            new Date(a.date)- new Date(b.date)
        ))
        this.setState({
            events:addEvent,
            userName:"",
            date:"",
            eventName:"",
            location:"",
            otherInfo:""
        })
        
    }
    handleChange=e=>{
        this.setState({
            [e.target.id]:[e.target.value]
        })
    }
    render(){
        return(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h2>Upcoming Ultimate Events</h2>
                <form style={{display:"flex",flexDirection:"column",width:"100%"}} onSubmit={this.handleSubmit}>
                    <input value={this.state.date} type="date" onChange={this.handleChange} id="date" placeholder="Date"></input>
                    <input value={this.state.eventName} onChange={this.handleChange} id="eventName" placeholder="Event Name"></input>
                    <input value={this.state.location} onChange={this.handleChange} id="location" placeholder="Location eg: Taipei, TW"></input>
                    <input value={this.state.otherInfo} onChange={this.handleChange} id="otherInfo" placeholder="Info"></input>
                    <input value={this.state.userName} onChange={this.handleChange} id="userName" placeholder="Your Name"></input>
                    <button type="submit">Submit</button>
                </form>

                <table style={{background:"lightblue"}}>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Event Name</th>
                            <th>Location</th>
                            <th>Info</th>
                            <th>Submitted By:</th>
                        </tr>
                        {this.state.events.map(event=>(
                            <tr key={event.dateAdded}>
                            <td>{event.date}</td>
                            <td>{event.eventName}</td>
                            <td>{event.location}</td>
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