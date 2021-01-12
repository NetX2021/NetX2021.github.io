import React, { Component } from 'react';
import './styles/App.css';
import './styles/navigation.css';
import './styles/header.css';
import './styles/about.css';
import './styles/event.css';

import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Event from './components/event';
import JsonData from './components/data.json';
import road from "./assets/Road_design.png";

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
      <div>
        <img src={road} className="bigRoad" alt="road that goes through whole page"></img>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Event/>
      </div>
    )
  }
}

export default App;