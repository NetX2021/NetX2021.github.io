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