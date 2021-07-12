import React, { Component } from "react";
import logo from '../assets/logo.png';
import mainPage from '../assets/constructed/Landing_page_graphic.png';

export class Header extends Component {
  render() {
    return (
      <div id="page-top">
        <div className="landContainer">
          <div className="topLandingBack">
            <div className="headerText">
              <img src={logo} className="landLogo" alt="NetX main logo"></img>
              <p className="landText">Case Competition and Network Event</p>
              <p className="landSubtitle">See you in September! </p>
              <a href="https://netx2021.typeform.com/to/ULzRpWVL" target="_blank" rel="noreferrer"><button className="applyButton" >Coming Soon</button></a>
            </div>

            <div className="headerImage">
              <img src={mainPage}  className="landGraphic" alt="NetX city scape"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;