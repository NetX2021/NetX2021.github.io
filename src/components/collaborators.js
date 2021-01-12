import React, { Component } from 'react'
import motherboard from '../assets/constructed/Circuit_board.png';
import mcgillBuildings from '../assets/constructed/McGill_Buildings.png';

export class Collaborators extends Component {
    
    
    render() {
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
            </div>
        );
    }
}