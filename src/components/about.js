import React, { Component } from 'react';
import topImage from '../assets/constructed/Cell_tower_graphic.png';
import botImage from "../assets/buildings_graphic.png";
import benchImage from "../assets/constructed/Bench_graphic.png";
export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="aboutContainer">
          <div className="topAboutBack">
            <img src={topImage} style={{width: "50%", marginTop: "-3vw"}}></img>
            <span className="mainSubtitle">Canada's <span style={{color: "#ff0000"}}>First</span></span>
            <span className="smallSubtitle"><span style={{color: "#ff0000"}}>Tech</span> Case Competition</span>
          </div>
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
          <img src={botImage} className="botImage"></img>
          <div className="botAboutBack">
            <div style={{display: "flex", flexDirection: "column"}}>
              <p className="botTitle">How We Help <span style={{color:"#ff0000"}}>Companies</span></p>
              <div style={{display: "flex", flexDirection: "row"}}>
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
                <img src={benchImage} style={{width: "25%", display: 'flex', marginLeft: "6%"}}></img>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <p className="botTitle" style={{marginLeft: "40%"}}>How We Help <span style={{color:"#ff0000"}}>Students</span></p>
              <div style={{display: "flex", flexDirection: "column"}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about