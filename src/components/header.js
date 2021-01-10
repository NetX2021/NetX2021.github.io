import React, { Component } from "react";
import logo from '../assets/logo.png';
import mainPage from '../assets/constructed/Landing_page_graphic.png';

export class Header extends Component {
  render() {
    return (
      <div id="top-page">
        <div className="landContainer">
          <div className="topLandingBack">
            <img src={logo} className="landLogo"></img>
            <div><img src={mainPage}  className="landGraphic"></img></div>
            <p className="landText">Case Competition and Network Event</p>
            <p className="landSubtitle">March 5-6th 2021 {"\n"} <p style={{fontSize: "2vw", marginTop: "-.3vw", marginLeft: ".5vw"}}>Virtual event</p> </p>
            <button className="applyButton">Apply Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;