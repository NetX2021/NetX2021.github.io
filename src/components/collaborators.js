import React, { Component } from 'react'
import motherboard from '../assets/constructed/Circuit_board.png';
import mcgillBuildings from '../assets/constructed/McGill_Buildings.png';
import bridgeImage from '../assets/constructed/bridge.png';


export class Collaborators extends Component {
    state = {
            index: 0,
            direction: null,
    };
    

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    
    render() {
        const properties = {
            controls: true,
            indicators: true,
            interval: 900,
          }

        const { index, direction } = this.state;

        return (
            <div id="collaborators">
                <div className="collabBuildings">
                    <img src={mcgillBuildings} className="buildingPicItself" alt="main mcgill buildings" />
                </div>
                <div className="collabDarkBox">
                    <span className="topCollab">Our <span style={{color: "#ff0000"}}>Partners</span></span>
                    <div className="twoCollabLogos">
                        <div className="tempCircle"></div>
                        <div className="tempCircle"></div>
                    </div>
                    <span className="invisibleCollab">Keynote <span style={{color: "#ffffff"}}>Speakers</span></span>
                    <img src={motherboard} className="motherBoard" alt="motherboard design"/>
                </div>
                <div className="collabLightBox">
                    <div className="tempCircleDark"></div>
                    <div className="tempCircleDark"></div>
                    <div className="tempCircleDark"></div>
                </div>
                <div className="collabLightBox">
                    <div className="collabNames"></div>
                    <div className="collabNames"></div>
                    <div className="collabNames"></div>
                </div>

                <img src={bridgeImage} className="bridge"></img>
                <div className="startupTitle">Startup <span style={{color:"#ff0000"}}>Showcase</span></div>
                <div className="startupBox">
                
                </div>

            </div>
        );
    }
}