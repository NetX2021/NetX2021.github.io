import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import JsonData from './components/data.json';

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
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
      </div>
    )
  }
}

export default App;