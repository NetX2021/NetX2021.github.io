import React, { Component } from "react";
import ig from '../assets/ig.png';
import Link from '../assets/in.png';
import fb from '../assets/fb.png';
import email from '../assets/email.png';

export class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="contactContainer">
            <div className="contactText">
                <div>Got More</div>
                <div style={{color: "#ff0000"}}>Questions?</div>
            </div>
            <a href="mailto:hello@netx2021.ca"><button className="contactButton">Send us an email</button></a>
        </div>
        <div className="bottomBar">
            <div className="icons">
                <a href="https://www.instagram.com/netxevent/"><img src={ig} className="socialIcon"></img></a> 
                <a href="https://www.linkedin.com/company/netx-case-competition"><img src={Link} className="socialIcon"></img></a>
                <a href="mailto:hello@netx2021.ca"><img src={email} className="socialIcon"></img></a>
                <a href="https://www.facebook.com/netxevent"><img src={fb} className="socialIcon"></img></a>
            </div>
            <div className="copyrightText"> Copyright NetX 2021 </div>
        </div>
      </div>
    );
  }
}

export default Contact;