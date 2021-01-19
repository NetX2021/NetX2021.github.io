import React, { Component } from 'react'
import phoneImage from '../assets/constructed/Phone_graphic.png';

export class event extends Component {
  render() {
    return (
        <div id="event">
          <div className="eventContainer">
            <div className="topEventTitle">
              More Than a <span style={{marginLeft: "20px", color: "#ff0000"}}> Conference</span>
            </div>

            {/* Network Event */}
            <div className="eventBox">
              <div className="eventTwoRows">
                <div className="eventTwoColumns">
                  <div className="eventBoxTitle"><span className="eventBoxSpan">Network</span> Event</div>
                  <div className="eventBoxTitle"><span className="eventBoxSpan">Case</span> Comp</div>
                </div>

                {/* Network Event */}
                <div className="eventTwoColumns">
                  <div className="eventImgColumn">
                    <img src={phoneImage} className="eventBoxImg" alt="Phone with various icons on top of it"></img>
                  </div>
                  <div className="eventTextColumn">
                    <div className="eventBoxText"> 
                    As a networking event, NetX will enable students to meet representatives of different tech startup companies as well as 
                    speakers of various backgrounds relevant to the industry. Students will then get a chance to hear about current projects 
                    and research all while discovering new technology currently being applied in the field. 

                    </div>
                  </div>
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