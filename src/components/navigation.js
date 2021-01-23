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

  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.clicking = this.clicking.bind(this);
  }
  
  clicking(event) {
    event.preventDefault();
    
    if (this.showMenu.state===true) {
      this.setState({
        showMenu: false,
      });
    } else {
      this.setState({
        showMenu: true,
      });
    }
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }

  closeMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: false,
    });
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
              <img className="brandCSS" src={mainLogo} alt="NetX main logo"/>
            </a>{" "}
          </div>

          {/**ul used to go here**/}
          <ul className="navRight">
            <li className="navButtonsSpaces">
              <span className="navButton">
                <a href="#about" className="page-scroll">
                  About
                </a>
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
                <a href="#collaborators" className="page-scroll">
                  Collaborators
                </a>
              </span>
            </li>
            <li className="navButtonsSpaces">
              <span className="navButton">
                <a href="#sponsors" className="page-scroll">
                  Sponsors
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
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </span>
            </li>
          </ul>
        </div>

        <button className="smallScreenButton" onClick={this.clicking}>
          <img className="smallScreen" src={hamburger} alt="hamburger menu icon"/>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="openedMenu">
                <li onClick={this.closeMenu} className="navButtonsSpacesSmall">
                  <span className="navButtonSmall">
                    <a href="#about" className="page-scrollSmall">
                      About
                    </a>
                    <div className="slider"></div>
                  </span>
                </li>
                <li onClick={this.closeMenu} className="navButtonsSpacesSmall">
                  <span className="navButtonSmall">
                    <a href="#event" className="page-scrollSmall">
                      Event
                    </a>
                  </span>
                </li>
                <li className="navButtonsSpacesSmall">
                  <span className="navButtonSmall">
                    <a href="#collaborators" onClick={this.closeMenu} className="page-scrollSmall">
                      Collaborators
                    </a>
                  </span>
                </li>
                <li onClick={this.closeMenu} className="navButtonsSpacesSmall">
                  <span className="navButtonSmall">
                    <a href="#sponsors" className="page-scrollSmall">
                      Sponsors
                    </a>
                  </span>
                </li>
                <li onClick={this.closeMenu} className="navButtonsSpacesSmall">
                  <span className="navButtonSmall">
                    <a href="#faq" className="page-scrollSmall">
                      FAQ
                    </a>
                  </span>
                </li>
                <li className="navButtonsSpacesSmall">
                  <span className="navButtonSmall">
                    <a href="#contact" onClick={this.closeMenu} className="page-scrollSmall">
                      Contact
                    </a>
                  </span>
                </li>
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