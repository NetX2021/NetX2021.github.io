import React, { Component } from 'react';
import topImage from '../assets/constructed/Cell_tower_graphic.png';
import botImage from "../assets/buildings_graphic.png";
import benchImage from "../assets/constructed/Bench_graphic.png";
import cloudImage from "../assets/constructed/black cloud glow.png";
import bridgeImage from "../assets/constructed/bridge.png";
import redCloud from "../assets/constructed/red cloud.png";
import blackCloud from "../assets/constructed/black cloud.png";


export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="aboutContainer">
          <div className="topAboutTitle">
            <img src={topImage} style={{width: "50%", marginTop: "-3vw", zIndex: "2"}} alt="screen and data"></img>
            <span className="mainSubtitle">Canada's <span style={{color: "#ff0000"}}>First</span></span>
            <span className="smallSubtitle"><span style={{color: "#ff0000"}}>Tech</span> Case Competition</span>
          </div>
          
          {/* What is NetX */}
          <div className="whatIsText">
            <p className="aboutTitle">What is Net<span style={{color: "#ff0000"}}>X</span></p>
            <p className="aboutText">incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea
            </p>
          </div>
          <div className="whatIsImg">
            <img src={botImage} className="botImage" alt="NetX robot mascot"></img>
          </div>
          
          <div className="botAboutBack">
            <br></br>
            {/* How we help companies */}
            <div className="aboutTwoColumns">
              <div className="aboutTextColumn">
                <p className="botTitle">How We Help <span style={{color:"#ff0000"}}>Companies</span></p>
                <p className="aboutText" style={{color: "white", marginLeft: "7%", position: "flex"}}>incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea
                </p>
              </div>
              <div className="aboutImgColumn">
                <img src={benchImage} style={{width: "100%", display: 'flex'}} alt="bench with computer user on it"></img>
              </div>
            </div>

            {/* How we help students */}
            <div className="aboutTwoColumns">
              <div className="aboutImgColumn">
                <div className="cloudText"><span style={{color: "#ff0000"}}>N</span>etwork <span style={{color: "#ff0000", marginLeft: "60%"}}>E</span>xplore <span style={{color: "#ff0000"}}>T</span>ranscend</div>
                <img src={cloudImage} style={{width: "150%", display: 'flex', marginRight: "15%"}} alt="glowing cloud with text">
                </img>
              </div>
              <div className="aboutTextColumn" style={{marginLeft: "8%"}}>
                <p className="botTitle">How We Help <span style={{color:"#ff0000"}}>Students</span></p>
                <p className="aboutText" style={{color: "white", marginLeft: "7%", position: "flex"}}>incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea
                </p>
              </div>
            </div>
            <img src={bridgeImage} style={{width: "90%", textAlign: "center",}} alt="bridge picture for cloud animation">
            </img>
          </div>

          {/* Transition Animation */}
          <div className="aboutTwoRows">
            <div className="floatCloudText" style={{marginLeft: "20%"}}>
                <span style={{position: "absolute", transform: "translate(14%, 7vw)"}}>Apply your skills in a real world setting</span>
              <img src={redCloud} style={{width: "100%"}}></img>
            </div>
            <div className="floatCloudText">
                <span style={{position: "absolute", transform: "translate(14%, 6vw)"}}>Discover new technology</span>
                <img src={blackCloud} style={{width: "50%"}}></img>
            </div>
              
          </div>
        </div>
      </div>
    )
  }
}

export default about