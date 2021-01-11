import React, { Component } from 'react'


function slideShow(){
  document.getElementById('event').style.display = "none";
}

export class event extends Component {
  render() {
    return (
        <div id="event">
          <div className="eventContainer">
            <div className="topEventTitle">
              More Than a <span style={{color: "#ff0000"}}> Conferance</span>
            </div>
          </div>
          <div>

            
          </div>

      </div>
    )
  }
}

export default event