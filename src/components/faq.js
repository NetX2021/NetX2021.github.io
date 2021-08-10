import React, { Component } from 'react'
import faqImage from "../assets/constructed/Faq_graphic.png";
import dropdown from "../assets/dropdown.png"
import hopper from "../assets/Hopper.png";
import haply from "../assets/Haply.png";
import notos from "../assets/Notos Technologies.png";
import data from "../assets/Dataperformers.png";
import { Slide } from "react-slideshow-image";

export class faq extends Component {
  state = {
    index: 0,
    direction: null,
  };

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {

    const properties = {
      controls: true,
      indicators: true,
      duration: 7000,
      infinite: true,
    };

    return (
      <div id="faq">
      <div className="faqTitle">Hear from our <span style={{color:"#ff0000"}}>Participants</span></div>
        <div className="faqContainer">
            <div className="faqImgColumn">
                <img src={faqImage} className="faqImage" alt="FAQ city scape"></img>
            </div>
          <div className="faqTextColumn">
          <div className="participantBox">
          <Slide {...properties}>
            <div className="each-slide">
              <div className="participantSlide">
                <a
                  href="https://www.hopper.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={hopper} className="hopperLogo" alt="hopper logo" />
                </a>
                <p className="hopperText">
                Founded in Montreal, Hopper is a prediction algorithm app enabling customers to save 
                money on  flight and hotel prices by booking at the right time! With innovative AI 
                and data-driven technology, Hopper aims to build a transparent travel marketplace 
                seeking to reduce traveler anxiety and help clients plan their next adventure.
                </p>
              </div>
            </div>
            <div className="each-slide">
              <div className="participantSlide">
                <div className="participantSlide">
                  <a
                    href="https://www.notostechnologies.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={notos}
                      className="notosLogo"
                      alt="notos technologies logo"
                    />
                  </a>
                  <p className="notosText">
                  Notos Technologies is a software company providing better solutions for UAV flight optimization. 
                  Through AI and aerial data, Notos’  software allows UAVs to autonomously find and exploit wind 
                  energies in the atmosphere, increasing flight efficiency, safety and range.
                  </p>
                </div>
              </div>
            </div>
            <div className="each-slide">
              <div className="participantSlide">
                <a
                  href="https://www.dataperformers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={data}
                    className="dataLogo"
                    alt="dataperformers logo"
                  />
                </a>
                <p className="dataText">
                    Dataperformers is an Applied AI company from Montreal building advanced and cross-industry technologies and products.
                     More than a simple algorithm, Dataperformers aims to utilize AI and big data to provide end-to-end solutions for complex manufacturing, 
                     aerospace and supply chain needs.
                </p>
              </div>
            </div>
            <div className="each-slide">
              <div className="participantSlide">
                <a
                  href="https://haply.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={haply}
                    className="haplyLogo"
                    alt="haply logo"
                  />
                </a>
                <p className="dataText">
                  Haply Robotics specializes in the sense of touch and are creating a physical simulation hardware for surgical simulation and tactical training. 
                  Their work is using cutting edge technologies in robotics, virtual reality, simulation design, and 6 degree-of-freedom motion tracking to create 
                  a platform that will shape the way we train, learn, and entertain ourselves far into the future.
                </p>
              </div>
            </div>
          </Slide>
        </div>
        </div>
          </div>
      </div>
    )
  }
}

export default faq