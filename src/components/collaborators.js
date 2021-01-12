import React, { Component } from 'react'
import motherboard from '../assets/constructed/Circuit_board.png';

export class Collaborators extends Component {
    
    
    render() {
        return (
            <div id="collaborators">

                <div className="collabDarkBox">
                    <span className="topCollab">Our <span style={{color: "#ff0000"}}>Partners</span></span>
                    <div className="twoCollabLogos">
                        <div className="tempCircle"></div>
                        <div className="tempCircle"></div>
                    </div>
                    <img src={motherboard} className="motherBoard" alt="motherboard design"/>
                </div>
            </div>
        );
    }
}