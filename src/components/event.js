import React, { Component } from 'react'
import phoneImage from '../assets/constructed/Phone_graphic.png';
import caseImage from '../assets/constructed/Case_comp_Graphic.png';
import circuitBoard from '../assets/Circuit_board 4.png';
import oldCasePdf from '../assets/Hopper_Case.pdf'
import oldCaseCover from '../assets/Hopper_Case_Study_Cover.png'

export class event extends Component {
  state = {
    NetworkClick: true,
    CaseClick: false,
  };

  hover(){
    if(
    document.getElementById("NetworkEvent") &&
    document.getElementById("Net")
    ){
      document.getElementById("NetworkEvent").style.color = "white";
      document.getElementById("NetworkEvent").style.borderBottom = "10px solid #ff0000";
      document.getElementById("NetworkEvent").style.transition = "all 0.3s ease-in-out";
      document.getElementById("Net").style.transition = "all 0.3s ease-in-out";
      document.getElementById("Net").style.color = "#ff0000";
    }
  }

  hover2(){
    if(!this.state.NetworkClick){
      if(
      document.getElementById("NetworkEvent") &&
      document.getElementById("Net")
      ){
        document.getElementById("NetworkEvent").style.color = "gray";
        document.getElementById("NetworkEvent").style.borderBottom = "none";
        document.getElementById("NetworkEvent").style.transition = "all 0.3s ease-in-out";
        document.getElementById("Net").style.color = "gray";
      }
    }
  }

  hover3(){
    if(
    document.getElementById("CaseComp") &&
    document.getElementById("Case")
    ){
      document.getElementById("CaseComp").style.color = "white";
      document.getElementById("CaseComp").style.borderBottom = "10px solid #ff0000";
      document.getElementById("CaseComp").style.transition = "all 0.3s ease-in-out";
      document.getElementById("Case").style.transition = "all 0.3s ease-in-out";
      document.getElementById("Case").style.color = "#ff0000";
    }
  }

  hover4(){
    if(!this.state.CaseClick){
      if(
      document.getElementById("CaseComp") &&
      document.getElementById("Case")
      ){
        document.getElementById("CaseComp").style.color = "gray";
        document.getElementById("CaseComp").style.borderBottom = "none";
        document.getElementById("Case").style.color = "gray";
      }
    }
  }

  NetworkActive = () => {
    this.setState({ CaseClick: false});
    this.setState({ NetworkClick: true});
    if(
      document.getElementById("NetworkEvent") &&
      document.getElementById("Net")
      ){
        document.getElementById("NetworkEvent").style.color = "white";
        document.getElementById("NetworkEvent").style.borderBottom = "10px solid #ff0000";
        document.getElementById("NetworkEvent").style.transition = "all 0.3s ease-in-out";
        document.getElementById("Net").style.color = "#ff0000";
        document.getElementById("CaseComp").style.color = "gray";
        document.getElementById("CaseComp").style.borderBottom = "none";
        document.getElementById("Case").style.color = "gray";
      }
    document.getElementById("NetworkContent").style.display = "flex";
    document.getElementById("CaseContent").style.display = "none";
  }

  CaseActive = () => {
    this.setState({ CaseClick: true});
    this.setState({ NetworkClick: false});
    this.hover2();
    if(
      document.getElementById("CaseComp") &&
      document.getElementById("Case")
      ){
        document.getElementById("CaseComp").style.color = "white";
        document.getElementById("CaseComp").style.borderBottom = "10px solid #ff0000";
        document.getElementById("CaseComp").style.transition = "all 0.3s ease-in-out";
        document.getElementById("Case").style.color = "#ff0000";
        document.getElementById("NetworkEvent").style.color = "gray";
        document.getElementById("NetworkEvent").style.borderBottom = "none";
        document.getElementById("Net").style.color = "gray";
      }
      document.getElementById("NetworkContent").style.display = "none";
      document.getElementById("CaseContent").style.display = "flex";
  }



  render() {
    return (
        <div id="event">
          <div className="circuitImageContainer">
          <div className="circuitImageBackground"></div>
            <img src={circuitBoard} className="circuitImage" alt="circuit board design">
            </img>
          </div>
          <div className="eventContainer">

            {/* Event Box */}
            <div className="eventBox">
              <div className="eventTwoRows">
                <div className="eventTwoColumns">
                  <div id="NetworkEvent" className="eventBoxTitle" onMouseEnter={() => this.hover()} onMouseLeave={() => this.hover2()} onClick={this.NetworkActive}
                  style={{color: "white", borderBottom:"10px solid #ff0000", transition:"all 0.3s ease-in-out"}}>
                    <span id="Net" style={{color:"#ff0000", transition:"all 0.3s ease-in-out"}}>Network</span> Event</div>
                  <div id="CaseComp" className="eventBoxTitle" onMouseEnter={() => this.hover3()} onMouseLeave={() => this.hover4()} onClick={this.CaseActive}>
                    <span id="Case">Case</span> Comp</div>
                </div>

                {/* Network Event */}
                <div id="NetworkContent" className="eventTwoColumns">
                  <div className="eventImgColumn">
                    <img src={phoneImage} className="eventBoxImg" alt="Phone with various icons on top of it"></img>
                  </div>
                  <div className="eventTextColumn">
                    <div className="eventBoxPhrases">Chat.Converse.<br></br><span>Connect</span></div>
                    <div className="eventBoxText"> 
                    Build your network by meeting our speakers,hear about current projects and learn about new technology being applied in the field. 
                    </div>
                  </div>
                  <div className="arrowRight" onClick={this.CaseActive}></div>
                </div>

                {/* Case Comp */}
                <div id="CaseContent" className="eventTwoColumns" style={{display:"none"}}>
                  <div className="arrowLeft" onClick={this.NetworkActive}></div>
                  <div className="eventImgColumn2">
                  <div style={{color:"#ff0000"}} className="curiousTop">Curious?</div>
                  <div className="curiousBottom">Check out one of our previous cases</div>
                  <a href={oldCasePdf} target="_blank">
                  <img src={oldCaseCover} className="eventBoxImg3" alt="previous hopper case" ></img>
                  </a>
                  </div>
                  <div className="eventTextColumn">
                    <div className="eventBoxPhrases">Compete.Collab.<br></br><span>Create</span></div>
                    <div className="eventBoxText">  
                    Showcase your skills and abilities outside of the standard interview process.
                    </div>
                  </div>
                  <div className="eventImgColumn">
                    <img src={caseImage} className="eventBoxImg2" alt="Individual with analytics board"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>


      </div>
    )
  }
}

export default event