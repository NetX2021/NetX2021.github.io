import React, { Component } from 'react'
import phoneImage from '../assets/constructed/Phone_graphic.png';

export class event extends Component {
  render() {
    return (
        <div id="event">
          <div className="eventContainer">
            <div className="topEventTitle">
              More Than a <span style={{marginLeft: "2vw", color: "#ff0000"}}> Conferance</span>
            </div>

            {/* Network Event */}
            <div className="eventBox">
              <div className="eventTwoRows">
                <div className="eventBoxTitle"><span style={{color: "#ff0000"}}>Network</span> Event...</div>
                <div className="eventTwoColumns">
                  <div className="eventImgColumn">
                    <img src={phoneImage} style={{width: "100%"}} alt="Phone with various icons on top of it"></img>
                  </div>
                  <div className="eventTextColumn">
                    <div className="eventBoxText"> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse
                    </div>
                  </div>
                  <i class="arrow right"></i>
                </div>
              </div>
            </div>
          </div>
          <div>

            
          </div>

      </div>
    )
  }
}

export default event