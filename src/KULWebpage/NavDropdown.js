import React from 'react'

function NavDropDown(props){
return(
    <div className="dropMenu">
        <h4>KUL Info</h4>
            <div className="list" id={"Guidelines"} onClick={props.changePage}>Guidelines and Rules</div>
            <div className="list" id={"GameSched"} onClick={props.changePage}>Upcoming Tournaments</div>
        <h4>KUL Stats</h4>
            <div className="list" id={"GameViewer"} onClick={props.changePage}>KUL GameViewer</div>
            <div className="list" id={"SeasonStats"} onClick={props.changePage}>Season Stats</div>
            <div className="list" id={"CareerStats"} onClick={props.changePage}>Career Stats</div> 
                                     
        
    </div>
)
}
export default NavDropDown