import React, { Component } from 'react';
import './App.css';
import './event.css';
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
        <img src={road} style={{width: "100%", position: "absolute", zIndex: "-1"}}></img>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Event/>
      </div>
    )
  }
}

export default App;