import React, { Component } from 'react';
import topImage from '../assets/constructed/Cell_tower_graphic.png';
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
        </div>
      </div>
    )
  }
}

export default about