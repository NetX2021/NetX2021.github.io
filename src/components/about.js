import React, { Component } from 'react';
import topImage from '../assets/constructed/Cell_tower_graphic.png';
import botImage from "../assets/buildings_graphic.png";
import benchImage from "../assets/constructed/Bench_graphic.png";
import cloudImage from "../assets/constructed/black cloud glow.png";
import bridgeImage from "../assets/constructed/bridge.png";
import redCloud from "../assets/constructed/red cloud.png";
import blackCloud from "../assets/constructed/black cloud.png";


export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="aboutContainer">
          <div className="topAboutTitle">
            <img src={topImage} className="topImage" alt="screen and data"></img>
            <span className="mainSubtitle">Canada's <span style={{color: "#ff0000"}}>First</span></span>
            <span className="smallSubtitle"><span style={{color: "#ff0000"}}>Tech</span> Case Competition</span>
          </div>
          
          {/* What is NetX */}
          <div className="whatIsText">
            <div className="aboutTitle">What is Net<span style={{color: "#ff0000"}}>X</span></div>
            <div className="aboutText">NetX is a case competition and network event entered around the technology and the startup space in Montreal.
             The competition will be a virtual two day event held in March. As a student run organization, our mission is to  break down the barriers 
             in the hiring process for both students and companies.How are we going to do this? By providing students opportunities that enable them
              to Network with potential employers , Explore new technology and Transcend barriers as a result.

            </div>
          </div>
          <div className="whatIsImg">
            <img src={botImage} className="botImage" alt="NetX robot mascot"></img>
          </div>
          
          <div className="botAboutBack">
            <br></br>
            {/* How we help students */}
            <div className="aboutTwoColumns">
              <div className="aboutTextColumn">
                <p className="botTitle">How We Help <span style={{color:"#ff0000"}}>Students</span></p>
                <p className="botAboutText">
                  NetX strives to create a unique environment which drives innovation  where students can build their knowledge base in the tech field, 
                  generate new ideas through collaboration and enhance their social network.
                </p>
              </div>
              <div className="aboutImgColumn">
                <img src={benchImage} style={{width: "100%", display: 'flex'}} alt="bench with computer user on it"></img>
              </div>
            </div>

            {/* How we help companies */}
            <div className="aboutTwoColumns">
              <div className="aboutImgColumn">
                <img src={cloudImage} className="botAboutImage" alt="glowing cloud with text">
                </img>
                <div className="cloudText"><span style={{color: "#ff0000"}}>N</span>etwork <span style={{color: "#ff0000", marginLeft: "60%"}}>E</span>xplore <span style={{color: "#ff0000"}}>T</span>ranscend</div>

              </div>
              <div className="aboutTextColumn">
                <p className="botTitle">How We Help <span style={{color:"#ff0000"}}>Companies</span></p>
                <p className="botAboutText">
                  NetX aims to provide companies exclusive access to motivated and qualified individuals. 
                  By diverting from the traditional hiring process, companies will be able to see participants apply their skills in real time.
                </p>
              </div>
            </div>
            <img src={bridgeImage} style={{width: "90%", textAlign: "center",}} alt="bridge for cloud animation">
            </img>
          </div>

          {/* Transition Animation */}
          <div className="aboutTwoRows" style={{overflow: "hidden"}}>
            <div className="floatRedCloudText">
                <span style={{position: "absolute", transform: "translate(14%, 7vw)"}}>Apply your skills in a real world setting</span>
              <img src={redCloud} style={{width: "100%"}} alt="red cloud animation"></img>
            </div>
            <div className="floatBlackCloudText">
                <span style={{position: "absolute", transform: "translate(14%, 6vw)"}}>Discover new technology</span>
                <img src={blackCloud} style={{width: "50%"}} alt="blue cloud animation"></img>
            </div>
              
          </div>
        </div>
      </div>
    )
  }
}

export default about