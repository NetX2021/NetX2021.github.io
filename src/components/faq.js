import React, { Component } from "react";
import faqImage from "../assets/constructed/Faq_graphic.png";
import dropdown from "../assets/dropdown.png";
import hopper from "../assets/Hopper.png";
import haply from "../assets/Haply.png";
import notos from "../assets/Notos Technologies.png";
import data from "../assets/Dataperformers.png";
import { Slide } from "react-slideshow-image";
import karl from "../assets/Karl_Atallah.jpeg";
import shirly from "../assets/Shirly_Xu.jpeg";

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
        <div className="faqTitle">
          Hear from our <span style={{ color: "#ff0000" }}>Participants</span>
        </div>
        <div className="faqContainer">
          <div className="faqImgColumn">
            <img src={faqImage} className="faqImage" alt="FAQ city scape"></img>
          </div>
          <div className="faqTextColumn">
            <div className="participantBox">
              <Slide {...properties}>
                <div className="each-slide">
                  <div className="participantSlide">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                      <div className="participantImageContainer">
                        <img
                          src={karl}
                          className="participantImage"
                          alt="participant Karl's image"
                        />
                      </div>
                      <p>Karl Atallah</p>
                    </div>
                    <p className="participantText">
                      <span style={{color: "#ff0000"}}>“  </span>Participating at the event was one
                      of the most enriching and insightful experiences in my
                      engineering degree at McGill University so far.<span style={{color: "#ff0000"}}>  ”</span>
                    </p>
                  </div>
                </div>
                <div className="each-slide">
                  <div className="participantSlide">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="participantImageContainer">
                      <img src={shirly} className="participantImage" alt="participant Shirly's image" />
                    </div>
                    <p>Shirly Xu</p>
                    </div>
                    <p className="participantText">
                    <span style={{color: "#ff0000"}}>“  </span>NetX was an incredibly rewarding case competition and
                      networking session to be a part of... I would definitely recommend
                      NetX to all, especially to those interested in tech and
                      business!<span style={{color: "#ff0000"}}>  ”</span>
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default faq;
