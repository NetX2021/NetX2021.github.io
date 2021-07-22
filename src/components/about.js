import React, { Component } from 'react';
import topImage from '../assets/constructed/Cell_tower_graphic.png';
import botImage from "../assets/buildings_graphic.png";
import benchImage from "../assets/constructed/Bench_graphic.png";
import peoplePres from "../assets/peoplePresentation.png";

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="aboutContainer">
          <div className="topAboutTitle">
            <img src={topImage} className="topImage" alt="screen and data"></img>
            <div className="mainSubtitle">Are You Up</div>
            <div className="smallSubtitle">
            For The
            <span style={{color: "#ff0000"}}> Challenge?</span>
            </div>
            
          </div>
          
          {/* What is NetX */}
          <div className="benefits">
            <div className="subBenefit">Network <span>with industry professionals</span></div>
            <div className="subBenefit">Explore <span>new and emerging tech</span></div>
            <div className="subBenefit">Transcend <span>barriers and build your career</span></div> 

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
                <img src={benchImage} className="benchImage" alt="bench with computer user on it"></img>
              </div>
            </div>

            {/* How we help companies */}
            <div className="aboutTwoColumns">
              <div className="aboutImgColumn">
                <img src={peoplePres} className="benchImage" alt="people presentation">
                </img>
              </div>
              <div className="aboutTextColumn">
                <p className="botTitle">How We Help <span style={{color:"#ff0000"}}>Companies</span></p>
                <p className="botAboutText">
                  NetX aims to provide companies exclusive access to motivated and qualified individuals. 
                  By diverting from the traditional hiring process, companies will be able to see participants apply their skills in real time.
                </p>
              </div>
            </div>
          
          </div>

        
        </div>
      </div>
    )
  }
}

export default about