import React, { Component } from "react";
import logo from '../assets/logo.png';
import mainPage from '../assets/constructed/Landing_page_graphic.png';

export class Header extends Component {
  render() {
    return (
      <div className="topLandingBack">
        <img src={logo} className="landLogo"></img>
        <img src={mainPage} className="landGraphic"></img>
        <p className="landText">Case Competition and Network Event</p>
        <p className="landSubtitle">March 5-6th 2021 <br></br> Virtual event</p>
        <button className="applyButton">Apply Now</button>
      </div>
    );
  }
}

export default Header;