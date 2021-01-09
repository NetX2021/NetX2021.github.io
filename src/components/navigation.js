import React, { Component } from "react";
import mainLogo from '../assets/logo.png';

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar">
        <div className="navBox">
          <div className="navbar-header">
            {/**<button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>**/}
            <a className="navbar-brand page-scroll" href="#page-top">
              <img className="brandCSS" src={mainLogo}/>
            </a>{" "}
          </div>

          {/**ul used to go here**/}
          <ul className="navRight">
            <li className="navButtonsSpaces">
              <span className="navButton">
                <a href="#about" className="page-scroll">
                  About
                </a>
                <div className="slider"></div>
              </span>
            </li>
            <li className="navButtonsSpaces">
              <span className="navButton">
                <a href="#event" className="page-scroll">
                  Event
                </a>
              </span>
            </li>
            <li className="navButtonsSpaces">
              <span className="navButton">
                <a href="#faq" className="page-scroll">
                  FAQ
                </a>
              </span>
            </li>
            <li className="navButtonsSpaces">
              <span className="navButton">
                <a href="#collaborators" className="page-scroll">
                  Collaborators
                </a>
              </span>
            </li>
            <li className="navButtonsSpaces">
              <span className="navButton">
                <a href="#sponors" className="page-scroll">
                  Sponsors
                </a>
              </span>
            </li>
            <li className="navButtonsSpaces">
              <span className="navButton">
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;