import React, { Component } from "react";
import motherboard from "../assets/circuit_animation.gif";
import mcgillBuildings from "../assets/constructed/McGill_Buildings.png";
import bridgeImage from "../assets/constructed/bridge.png";
import engine from "../assets/McGillEngine.jpeg";
import engineer from "../assets/McGillEngineer.jpeg";
import partners from "../assets/partners.jpg";
import speaker1 from "../assets/Katya_Marc.jpeg";
import speaker2 from "../assets/melike-lab.jpg";
import speaker3 from "../assets/Lorraine_McGill_BK.jpg";
import hopper from "../assets/Hopper.png";
import notos from "../assets/Notos Technologies.png";
import data from "../assets/Dataperformers.png";
import holt from "../assets/holt.png";
import next from "../assets/Sponsor_Next36.png";
import tech from "../assets/Sponsor_TechStars.png";
import haply from "../assets/Haply.png";
import { Slide } from "react-slideshow-image";

export class Collaborators extends Component {
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
      <div id="collaborators">
        <div className="collabBuildings">
          {/* <img
            src={mcgillBuildings}
            className="buildingPicItself"
            alt="main mcgill buildings"
          /> */}
        </div>
        <div className="collabDarkBox">
          <span className="topCollab" style={{ color: "black" }}>
            Our <span style={{ color: "#ff0000" }}>Partners</span>
          </span>
          <div className="twoCollabLogos">
            <a
              style={{ borderRadius: "50%" }}
              href="https://www.mcgill.ca/engine/"
              target="_blank"
              rel="noopener noreferrer"
            >

              {
              
               <img
                src={partners}
                className="circleImages"
                alt="McGill Engine logo"
              /> }
            </a>
            <a
              style={{ borderRadius: "50%" }}
              href="https://www.mcgill.ca/engineering/students/undergraduate/mesc"
              target="_blank"
              rel="noopener noreferrer"
            >
              {
               <img
                src={partners}
                className="circleImages"
                alt="McGill Engineer logo"
              />}
            </a>
          </div>
          <span className="invisibleCollab">
            Keynote <span style={{ color: "#ffffff" }}>Speakers</span>
          </span>
          <img
            src={motherboard}
            className="motherBoard"
            alt="motherboard design"
          />
        </div>
        <div className="collabLightBox">
          <a
            style={{ borderRadius: "50%" }}
            href="https://www.mcgill.ca/engine/resources/mcgill-engine-centre-support/team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={speaker1} className="circleImages" alt="Katya Marc" />
          </a>
          <a
            style={{ borderRadius: "50%" }}
            href="https://engineering.uottawa.ca/people/erol-kantarci-melike"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={speaker2}
              className="circleImages"
              alt="Melike Erol-Kantarci"
            />
          </a>
          <a
            style={{ borderRadius: "50%" }}
            href="https://www.mcgill.ca/careers4engineers/contact-ecc/meet-ecc-team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={speaker3}
              className="circleImages"
              alt="Lorraine McGill BK"
            />
          </a>
        </div>
        <div className="collabLightBox">
          <div className="collabNames">
            <p>Katya Marc,</p>
            <p>Associate Director,</p>
            <p>McGill Engine</p>
          </div>
          <div className="collabNames">
            <p>Melike Erol-Kantarci,</p>
            <p>Canada Research-Chair,</p>
            <p>UOttawa</p>
          </div>
          <div className="collabNames">
            <p>Lorraine Donald,</p>
            <p>Skills Development Advisor,</p>
            <p>Engineering Career Centre</p>
          </div>
        </div>

        <img src={bridgeImage} className="bridge" alt="bridge"></img>
        <div className="startupTitle">
          Startup <span style={{ color: "#ff0000" }}>Showcase</span>
        </div>
        <div className="startupBox">
          <Slide {...properties}>
            <div className="each-slide">
              <div className="startupSlide">
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
              <div className="startupSlide">
                <div className="startupSlide">
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
              <div className="startupSlide">
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
              <div className="startupSlide">
                <a
                  href="https://haply.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={haply}
                    className="haplyLogo"
                    alt="dataperformers logo"
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
        
        <div className="sponsersBox">
          <div className="sponserTitle">
            Our <span style={{ color: "#ff0000" }}>Affiliates</span>
          </div>
          <div className="sponserCol">
            <a href="https://www.holtaccelerator.ai/" target="_blank" rel="noopener noreferrer" ><img src={holt} className="deloitte" alt="deloitte logo"/></a>
            <a href="https://www.nextcanada.com/next-36/" target="_blank" rel="noopener noreferrer" ><img src={next} className="next" alt="next logo"/></a>
            <a href="https://www.techstars.com" target="_blank" rel="noopener noreferrer" ><img src={tech} className="tech" alt="tech logo"/></a>
          </div>
        </div>
      </div>
    );
  }
}
