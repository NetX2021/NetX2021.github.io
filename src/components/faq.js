import React, { Component } from 'react'
import faqImage from "../assets/constructed/Faq_graphic.png";
import dropdown from "../assets/dropdown.png"

export class faq extends Component {
  state = { showingone: true };
  state = { showingtwo: true };
  state = { showingthree: true };
  state = { showingfour: false };
  
  render() {
    const { showingone } = this.state;
    const { showingtwo } = this.state;
    const { showingthree } = this.state;
    const { showingfour } = this.state;
    return (
      <div id="faq">
        <div className="faqContainer">
            <div className="faqImgColumn">
                <img src={faqImage} className="faqImage" alt="FAQ city scape"></img>
            </div>
            <div className="faqTextColumn">
                <div className="faqTitle">FAQ'S</div>
                { !showingone 
                    ? <button className="faqButton" onClick={() => this.setState({ showingone: !showingone })}>
                      Can we apply in teams?
                      <img className="rightButtonArrow"
                      src={dropdown}
                      alt="dropdown"/>
                    </button>
                    : null
                }
                { showingone 
                    ? <button className="faqButton faqclicked" onClick={() => this.setState({ showingone: !showingone })}>
                      Can we apply in teams?
                      <img className="rightButtonArrow clicked"
                      src={dropdown}
                      alt="dropdown"/>
                    </button>
                    : null
                }
                { showingone
                  ? <div className="faqInfo">Applicants can submit names of other applicants they wish to team up on their registration form and will be placed together if both applicants are selected. Otherwise, applicants will be placed in teams by our selection committee.
                  </div>
                  : null
                }

                { !showingtwo 
                    ? <button className="faqButton" onClick={() => this.setState({ showingtwo: !showingtwo })}>
                      How many people can I have on my team?
                      <img className="rightButtonArrow"
                      src={dropdown}
                      alt="dropdown"/>
                    </button>
                    : null
                }
                { showingtwo 
                    ? <button className="faqButton faqclicked" onClick={() => this.setState({ showingtwo: !showingtwo })}>
                      How many people can I have on my team?
                      <img className="rightButtonArrow clicked"
                      src={dropdown}
                      alt="dropdown"/>
                    </button>
                    : null
                }
                { showingtwo
                  ? <div className="faqInfo">Teams will consist of 2 participants</div>
                  : null
                }

                { !showingthree 
                    ? <button className="faqButton" onClick={() => this.setState({ showingthree: !showingthree })}>
                      When does the event happen?
                      <img className="rightButtonArrow"
                      src={dropdown}
                      alt="dropdown"/>
                    </button>
                    : null
                }
                { showingthree 
                    ? <button className="faqButton faqclicked" onClick={() => this.setState({ showingthree: !showingthree })}>
                      When does the event happen?
                      <img className="rightButtonArrow clicked"
                      src={dropdown}
                      alt="dropdown"/>
                    </button>
                    : null
                }
                { showingthree
                  ? <div className="faqInfo">The event will be held on the weekend of March 20th</div>
                  : null
                }

                { !showingfour
                    ? <button className="faqButton" onClick={() => this.setState({ showingfour: !showingfour })}>
                      How much does it cost to attend?
                      <img className="rightButtonArrow"
                      src={dropdown}
                      alt="dropdown"/>
                    </button>
                    : null
                }
                { showingfour 
                    ? <button className="faqButton faqclicked" onClick={() => this.setState({ showingfour: !showingfour })}>
                      How much does it cost to attend?
                      <img className="rightButtonArrow clicked"
                      src={dropdown}
                      alt="dropdown"/>
                    </button>
                    : null
                }
                { showingfour
                  ? <div className="faqInfo">The event is free for all applicants!</div>
                  : null
                }
            </div>
          </div>
      </div>
    )
  }
}

export default faq