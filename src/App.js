import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

import About from './Components/About/About';
import BetaSkills from './Components/About/BetaSkills';
import Skills from './Components/About/Skills';
import Testimonial from './Components/About/Testimonial';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Footer from './Parts/Footer';

class App extends Component {
  constructor(){
    super()
    this.state = {
      mobileShow: false,
      screenWidth: window.innerWidth,
      theme: false,
      darkTheme: "#0D141C",
      lightTheme: "#E3EAF2",
      links:{
          "Home": "/",
          "About": "/about",
          "Project": "/project",
          "Contact": "/contact",
      }
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  updateState = (x) => {
    this.setState({...x});
  }

  render() {
    window.alert("WEBSITE UNDER CODESTRUCTION");
    const darkTheme = {backgroundColor: this.state.darkTheme}
    const lightTheme = {backgroundColor: this.state.lightTheme}
    return (
      <div style={(this.state.theme)?darkTheme:lightTheme}>

        <Router>

          <Navbar data={this.state} updateState={this.updateState} />
            <div className="content">
              <Switch>
                <Route exact path={this.state.links["Home"]}>
                  <Home data={this.state} updateState={this.updateState}/>
                </Route>
                <Route exact path={this.state.links["About"]}>
                  <div className="mt-4 text-center">
                    <About theme={this.state.theme} light={this.state.lightTheme} dark={this.state.darkTheme}/>
                    <Skills theme={this.state.theme} light={this.state.lightTheme} dark={this.state.darkTheme} />
                    <BetaSkills theme={this.state.theme} light={this.state.lightTheme} dark={this.state.darkTheme} />
                    <Testimonial theme={this.state.theme} light={this.state.lightTheme} dark={this.state.darkTheme} />
                  </div>
                </Route>
                <Route exact path={this.state.links["Project"]}>
                  <Project theme={this.state.theme} light={this.state.lightTheme} dark={this.state.darkTheme}/>
                </Route>
                <Route exact path={this.state.links["Contact"]}>
                  <Contact theme={this.state.theme} light={this.state.lightTheme} dark={this.state.darkTheme}/>
                </Route>
              </Switch>
            </div>

        </Router>

        <Footer data={this.state} />

      </div>
    )
  }
}

export default App;

