import React, { Component } from 'react'
import faqImage from "../assets/constructed/Faq_graphic.png";

export class faq extends Component {
  render() {
    return (
        <div id="faq">
          <div className="faqContainer">
                <div className="faqTextColumn">
                    <div className="faqTitle">FAQ'S</div>
                    <div className="faqSubtitle">Who we are <div className="arrow-down" style={{transform: "translate(30vw,-3vw)"}}></div></div>
                    <div className="faqSubtitle">How to apply <div className="arrow-down" style={{transform: "translate(30vw,-3vw)"}}></div></div>
                    <div className="faqSubtitle">Accomodations<div className="arrow-down" style={{transform: "translate(30vw,-3vw)"}}></div></div>
                    <div className="faqSubtitle">When is it <div className="arrow-down" style={{transform: "translate(30vw,-3vw)"}}></div></div>
                </div>
                <div className="faqImgColumn">
                    <img src={faqImage} style={{width: "40vw"}} alt="FAQ city scape"></img>
                </div>
            </div>
        </div>
    )
  }
}

export default faq