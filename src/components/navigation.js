import React, { Component } from "react";

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
              <p className="brandCSS">NetX</p>
            </a>{" "}
          </div>

          {/**ul used to go here**/}
          <ul className="navRight">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#event" className="page-scroll">
                Event
              </a>
            </li>
            <li>
              <a href="#faq" className="page-scroll">
                FAQ
              </a>
            </li>
            <li>
              <a href="#collaborators" className="page-scroll">
                Collaborators
              </a>
            </li>
            <li>
              <a href="#companies" className="page-scroll">
                Sponsors
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;