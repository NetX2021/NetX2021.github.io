import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
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
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              React Landing Page
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About Us
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
                  Companies
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;