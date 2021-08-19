import React, { Component } from "react";
import motherboard from "../assets/circuit_animation.gif";
import mcgillBuildings from "../assets/constructed/McGill_Buildings.png";
import bridgeImage from "../assets/constructed/bridge.png";
import engine from "../assets/McGillEngine.jpeg";
import engineer from "../assets/McGillEngineer.jpeg";
import speaker1 from "../assets/Katya_Marc.jpeg";
import speaker2 from "../assets/melike-lab.jpg";
import speaker3 from "../assets/Lorraine_McGill_BK.jpg";
import speaker4 from "../assets/Ali Elawad.jpeg";
import speaker5 from "../assets/Alexandre Borowczyk.jpeg";
import speaker6 from "../assets/Alex Campeau.png";
import speaker7 from "../assets/Bruno Morency.jpeg";
import speaker8 from "../assets/GB_profile pic_Headshot 2.jpeg";
import speaker9 from "../assets/Sanchit Gupta.jpeg";
import hopper from "../assets/Hopper.png";
import notos from "../assets/Notos Technologies.png";
import data from "../assets/Dataperformers.png";
import holt from "../assets/holt.png";
import next from "../assets/Sponsor_Next36.png";
import tech from "../assets/Sponsor_TechStars.png";
import haply from "../assets/Haply.png";
import pointer from "../assets/deconstructed/phone graphic/Phone_graphic-9.png";
import cloud from "../assets/white_cloud.png";
import threeCloud from "../assets/deconstructed/Landing Page graphic/Landing_page_graphic-9.png";
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
          <img
            src={mcgillBuildings}
            className="buildingPicItself"
            alt="main mcgill buildings"
          />
        </div>
        <div className="collabDarkBox">
          <span className="topCollab">
            Our <span style={{ color: "#ff0000" }}>Partners</span>
          </span>
          <div className="twoCollabLogos">
            <a
              style={{ borderRadius: "50%" }}
              href="https://www.mcgill.ca/engine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={engine}
                className="circleImages"
                alt="McGill Engine logo"
              />
            </a>
            <a
              style={{ borderRadius: "50%" }}
              href="https://www.mcgill.ca/engineering/students/undergraduate/mesc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={engineer}
                className="circleImages"
                alt="McGill Engineer logo"
              />
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
        <div className="collabBox">
          <div className="collabRow">
            <img src={cloud} className="cloud4" alt="cloud" />
            <img src={cloud} className="cloud5" alt="cloud" />
            <img src={cloud} className="cloud" alt="cloud" />
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://www.mcgill.ca/engine/resources/mcgill-engine-centre-support/team"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker1}
                  className="circleImages borderRed"
                  alt="Katya Marc"
                />
              </a>
              <p>Katya Marc,</p>
              <div className="collabDescription">
                <p>Associate Director,</p>
                <p>McGill Engine</p>
              </div>
            </div>
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://engineering.uottawa.ca/people/erol-kantarci-melike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker2}
                  className="circleImages borderDarkRed"
                  alt="Melike Erol-Kantarci"
                />
              </a>
              <p>Melike Erol-Kantarci,</p>
              <div className="collabDescription">
                <p>Canada Research-Chair,</p>
                <p>UOttawa</p>
              </div>
            </div>
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://www.mcgill.ca/careers4engineers/contact-ecc/meet-ecc-team"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker3}
                  className="circleImages borderRed"
                  alt="Lorraine McGill BK"
                />
              </a>
              <p>Lorraine Donald,</p>
              <div className="collabDescription">
                <p>Skills Development Advisor,</p>
                <p>Engineering Career Centre</p>
              </div>
            </div>
            <img src={cloud} className="cloud6" alt="cloud" />
            <img src={pointer} className="redPointer" alt="red pointer" />
          </div>

          <div className="collabRow">
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://www.linkedin.com/in/alielawad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker4}
                  className="circleImages borderBlue"
                  alt="Ali Elawad"
                />
              </a>
              <p>Ali Elawad,</p>
              <div className="collabDescription">
                <p>CPO and Partner,</p>
                <p>Dataperformers</p>
              </div>
            </div>
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://www.notostechnologies.com/about-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker5}
                  className="circleImages borderLightBlue"
                  alt="Alexandre Borowczyk"
                />
              </a>
              <p>Alexandre Borowczyk,</p>
              <div className="collabDescription">
                <p>Co-founder and CTO,</p>
                <p>Notos Technologies</p>
              </div>
            </div>
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://www.linkedin.com/in/alex-campeau-ab83532/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker6}
                  className="circleImages borderPeach"
                  alt="Alex Campeau"
                />
              </a>
              <p>Alex Campeau,</p>
              <div className="collabDescription">
                <p>VP Engineering,</p>
                <p>Hopper</p>
              </div>
            </div>
            <img src={cloud} className="cloud2" alt="cloud" />
          </div>

          <div className="collabRow">
            <img src={cloud} className="cloud3" alt="cloud" />
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://www.linkedin.com/in/brunomorency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker7}
                  className="circleImages borderGreen"
                  alt="Bruno Morency"
                />
              </a>
              <p>Bruno Morency,</p>
              <div className="collabDescription">
                <p>Managing Director,</p>
                <p>Techstars</p>
              </div>
            </div>
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://www.linkedin.com/in/gabs2019/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker8}
                  className="circleImages borderLightBlue"
                  alt="Gaurav Bansal"
                />
              </a>
              <p>Gaurav Bansal,</p>
              <div className="collabDescription">
                <p>Program Manager,</p>
                <p>Holt Accelerator</p>
              </div>
            </div>
            <div className="collabPerson">
              <a
                style={{ borderRadius: "50%" }}
                href="https://www.linkedin.com/in/sanch-gupta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker9}
                  className="circleImages borderOrange"
                  alt="Sanchit Gupta"
                />
              </a>
              <p>Sanchit Gupta,</p>
              <div className="collabDescription">
                <p>Alumni,</p>
                <p>Next36</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sponsersBox">
          <img src={threeCloud} className="threeCloud" alt="three clouds" />
          <div className="sponserTitle">
            Our <span style={{ color: "#ff0000" }}>Affiliates</span>
          </div>
          <div className="sponserRow">
            <a
              href="https://www.dataperformers.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={data}
                className="dataLogo sponser"
                alt="dataperformers logo"
              />
            </a>
            <a
              href="https://www.notostechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={notos}
                className="notosLogo sponser"
                alt="notos technologies logo"
              />
            </a>
            <a
              href="https://www.hopper.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={hopper}
                className="hopperLogo sponser"
                alt="hopper logo"
              />
            </a>
            <a
              href="https://haply.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={haply} className="haplyLogo sponser" alt="haply logo" />
            </a>
          </div>

          <div className="sponserRow">
            <a
              href="https://www.techstars.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tech} className="tech sponser" alt="tech logo" />
            </a>
            <a
              href="https://www.holtaccelerator.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={holt} className="holt sponser" alt="holt logo" />
            </a>
            <a
              href="https://www.nextcanada.com/next-36/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={next} className="next sponser" alt="next logo" />
            </a>
          </div>
          <img src={threeCloud} className="threeCloud2" alt="three clouds" />
        </div>
      </div>
    );
  }
}
