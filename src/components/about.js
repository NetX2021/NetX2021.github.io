import React, { Component } from 'react';
import topImage from '../assets/constructed/Cell_tower_graphic.png';
import botImage from "../assets/buildings_graphic.png";
import benchImage from "../assets/constructed/Bench_graphic.png";
import cloudImage from "../assets/constructed/black cloud glow.png";

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="aboutContainer">
          <div className="topAboutTitle">
            <img src={topImage} style={{width: "50%", marginTop: "-3vw"}} alt="screen and data"></img>
            <span className="mainSubtitle">Canada's <span style={{color: "#ff0000"}}>First</span></span>
            <span className="smallSubtitle"><span style={{color: "#ff0000"}}>Tech</span> Case Competition</span>
          </div>
          
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
            <div className="aboutTwoColumns">
            <div className="aboutImgColumn">
                <div className="cloudText"><span style={{color: "#ff0000"}}>N</span>etwork <span style={{color: "#ff0000", transform: "translate(20vw)"}}>E</span>xplore <span style={{color: "#ff0000"}}>T</span>ranscend</div>
                <img src={cloudImage} style={{width: "150%", display: 'flex'}} alt="bench with computer user on it">
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
          </div>
        </div>
      </div>
    )
  }
}

export default about