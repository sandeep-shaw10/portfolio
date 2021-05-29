import React, { Component } from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Blob from "./Blob";
import './Home.css'
import Intro from "./Intro";
import Linker from "../../Parts/Linker";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container container">
          <div className="introBox d-flex justify-content-between" style={{position: "relative"}}>
              <Intro data={this.props.data} />
              <Blob theme={this.props.data.theme} light={this.props.data.lightTheme} dark={this.props.data.darkTheme} />
          </div>
        </div>

        <About theme={this.props.data.theme} light={this.props.data.lightTheme} dark={this.props.data.darkTheme} />
        <div className="text-center mb-5">
          <Link to="/about" className="btn btn-lg" style={{backgroundColor: "#8d86c9", color:"white"}}>Know More</Link>
        </div>

          <Linker theme={this.props.data.theme} light={this.props.data.lightTheme} dark={this.props.data.darkTheme} />


      </>
    );
  }
}
