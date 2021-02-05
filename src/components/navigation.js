import React, { Component } from "react";
import mainLogo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';

export class Navigation extends Component {
  state = { showingNav: true };

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


    if (!window.scrollY < 1 && currentScrollY > lastScrollY) {
      this.setState({ slide: '-80px' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    const { showingNav } = this.state;
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
           {/**<div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#sponsors" className="page-scroll">
                  Sponsors
                </a>
              </span>
            </div>**/}
            <div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#faq" className="page-scroll">
                  FAQ
                </a>
              </span>
            </div>
            {/**<div className="navButtonsSpaces">
              <span className="navButton">
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </span>
            </div>**/}
          </ul>
        </div>

        <button className="smallScreenButton" onClick={() => this.setState({ showingNav: !showingNav })}>
          <img className="smallScreen" src={hamburger} alt="hamburger menu icon"/>
        </button>
        
        { showingNav
            ? (
              <div className="openedMenu">
                <li className="navButtonsSpacesSmall">
                  <span className="navButton">
                    <a onClick={() => this.setState({ showingNav: !showingNav })} href="#about" className="page-scrollSmall">
                      About
                    </a>
                    <div className="slider"></div>
                  </span>
                </li>
                <li className="navButtonsSpacesSmall">
                  <span className="navButton">
                    <a onClick={() => this.setState({ showingNav: !showingNav })} href="#event" className="page-scrollSmall">
                      Event
                    </a>
                  </span>
                </li>
                <li className="navButtonsSpacesSmall">
                  <span className="navButton">
                    <a onClick={() => this.setState({ showingNav: !showingNav })} href="#collaborators" className="page-scrollSmall">
                      Collaborators
                    </a>
                  </span>
                </li>
                {/**<li className="navButtonsSpacesSmall">
                  <span className="navButtonSmall">
                    <a onClick={() => this.setState({ showingNav: !showingNav })} href="#sponsors" className="page-scrollSmall">
                      Sponsors
                    </a>
                  </span>
                </li>**/}
                <li className="navButtonsSpacesSmall">
                  <span className="navButton">
                    <a onClick={() => this.setState({ showingNav: !showingNav })} href="#faq" className="page-scrollSmall">
                      FAQ
                    </a>
                  </span>
                </li>
                {/**<li onClick={() => this.setState({ showingNav: !showingNav })} className="navButtonsSpacesSmall">
                  <span className="navButton">
                    <a href="#contact" className="page-scrollSmall">
                      Contact
                    </a>
                  </span>
                </li>**/}
              </div>
            )
            : (
              null
            )
        }
      </nav>
    );
  }
}

export default Navigation;