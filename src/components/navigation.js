import React, { Component } from "react";
import mainLogo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';

export class Navigation extends Component {
  state = {
    auth: false,
    slide: 0,  // How much should the Navbar slide up or down
    lastScrollY: 0,  // Keep track of current position in state
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-80px' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  on() {
    document.getElementById("navOverlay").style.display = "block";
  }
  
  off() {
    document.getElementById("navOverlay").style.display = "none";
  }

  render() {
    return (
      <nav id="menu" className="navbar" style={{
        transform: `translate(0, ${this.state.slide})`,
        transition: 'transform 150ms linear',
      }}> 
        <div id="navOverlay" onClick={this.off}></div>
        <div className="navBox">
          <div className="navbar-header">
            <a className="navbar-brand page-scroll" href="#page-top">
              <img className="brandCSS" src={mainLogo} alt="NetX main logo"/>
            </a>{" "}
          </div>

          {/**ul used to go here**/}
          <ul className="navRight">
            <div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#about" className="page-scroll">
                  About
                </a>
              </span>
            </div>
            <div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#event" className="page-scroll">
                  Event
                </a>
              </span>
            </div>
            <div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#collaborators" className="page-scroll">
                  Collaborators
                </a>
              </span>
            </div>
            <div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#sponsors" className="page-scroll">
                  Sponsors
                </a>
              </span>
            </div>
            <div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#faq" className="page-scroll">
                  FAQ
                </a>
              </span>
            </div>
            <div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </span>
            </div>
          </ul>
        </div>

        <button className="smallScreenButton" onclick={this.on}>
          <img className="smallScreen" src={hamburger} alt="hamburger menu icon"/>
        </button>
      </nav>
    );
  }
}

export default Navigation;