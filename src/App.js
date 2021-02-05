import React, { Component } from 'react';
import './styles/App.css';
import './styles/navigation.css';
import './styles/header.css';
import './styles/about.css';
import './styles/event.css';
import './styles/collaborators.css';
import './styles/faq.css';
import './styles/slideshow.css';
import './styles/contact.css';


import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Event from './components/event';
import FAQ from './components/faq';
import Contact from './components/contact';
import JsonData from './components/data.json';
import road from "./assets/Road_design.png";
import { Collaborators } from './components/collaborators';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div style={{overflow: "hidden"}}>
        <img src={road} className="bigRoad" alt="road that goes through whole page"></img>
        <Navigation />
        <Header />
        <About />
        <Event/>
        <Collaborators />
        <FAQ/>
        <Contact/>
      </div>
    )
  }
}

export default App;