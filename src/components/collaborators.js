import React, { Component } from 'react'
import motherboard from '../assets/constructed/Circuit_board.png';
import mcgillBuildings from '../assets/constructed/McGill_Buildings.png';
import bridgeImage from '../assets/constructed/bridge.png';
import engine from '../assets/McGillEngine.jpeg';
import engineer from '../assets/McGillEngineer.jpeg';
import speaker1 from '../assets/Katya_Marc.jpeg';
import speaker2 from '../assets/Lorraine_McGill_BK.jpg';
import hopper from '../assets/Hopper.png';
import notos from '../assets/Notos Technologies.png';
import data from '../assets/Dataperformers.png';
import { Slide } from 'react-slideshow-image';

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
            duration: 7000,
            infinite: true,
          }


        return (
            <div id="collaborators">
                <div className="collabBuildings">
                    <img src={mcgillBuildings} className="buildingPicItself" alt="main mcgill buildings" />
                </div>
                <div className="collabDarkBox">
                    <span className="topCollab">Our <span style={{color: "#ff0000"}}>Partners</span></span>
                    <div className="twoCollabLogos">
                        <img src={engine} className="circleImages" alt="McGill Engine logo" />
                        <img src={engineer} className="circleImages" alt="McGill Engineer logo" />
                    </div>
                    <span className="invisibleCollab">Keynote  <span style={{color: "#ffffff"}}>Speakers</span></span>
                    <img src={motherboard} className="motherBoard" alt="motherboard design"/>
                </div>
                <div className="collabLightBox">
                    <a style={{borderRadius: "50%"}} href="https://www.mcgill.ca/engine/resources/mcgill-engine-centre-support/team"><img src={speaker1} className="circleImages" alt="Katya Marc" /></a>
                    <a style={{borderRadius: "50%"}} href="https://www.mcgill.ca/careers4engineers/contact-ecc/meet-ecc-team"><img src={speaker2} className="circleImages" alt="Lorraine McGill BK" /></a>
                </div>
                <div className="collabLightBox">
                    <div className="collabNames">
                        <p>Katya Marc,</p>
                        <p>Associate Director,</p>
                        <p>McGill Engine</p>
                    </div>
                    <div className="collabNames">
                        <p>Lorraine Donald,</p>
                        <p>Skills Development Advisor,</p>
                        <p>Engineering Career Centre</p>
                    </div>
                </div>


                <img src={bridgeImage} className="bridge" alt="bridge"></img>
                <div className="startupTitle">Startup <span style={{color:"#ff0000"}}>Showcase</span></div>
                <div className="startupBox">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div className="startupSlide">
                                <a href="https://www.hopper.com/"><img src={hopper} className="hopperLogo" alt="hopper logo" /></a>
                                <p className="hopperText">Founded in Montreal, Hopper is a prediction algorithm app enabling customers to monitor flight and hotel prices 
                                and save money by booking at the right time! Through their customer-centric approach, Hopper is the fastest growing mobile travel marketplace 
                                aiming to reduce travel anxiety throughout trip planning, helping enjoy your trip to the fullest.</p>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="startupSlide">
                                <div className="startupSlide">
                                    <a href="https://www.notostechnologies.com/"><img src={notos} className="notosLogo" alt="notos technologies logo" /></a>
                                    <p className="notosText">Notos Technologies is a software company providing better solutions for UAV flight optimization. 
                                    Through AI and aerial data, Notos’  software allows UAVs to autonomously find and exploit wind energies in the atmosphere, 
                                    increasing flight efficiency, safety and range.</p>
                                </div>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="startupSlide">
                                <a href="https://www.dataperformers.com/"><img src={data} className="dataLogo" alt="dataperformers logo" /></a>
                                <p className="dataText">Dataperformers is an Applied AI company from Montreal building advanced and cross-industry technologies and products. More than a simple algorithm, Dataperfomrers aims to utilize AI and big data to provide end-to-end solutions for complex manufacturing, aerospace and supply chain needs.</p>
                            </div>
                        </div>
                    </Slide>
                </div>

            </div>
        );
    }
}