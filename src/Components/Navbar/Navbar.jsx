import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {RiCloseCircleFill} from "react-icons/ri"
import './Navbar.css';

import {VscThreeBars} from 'react-icons/vsc';
import {WiMoonAltWaxingGibbous4} from 'react-icons/wi';
import {WiMoonWaningGibbous1} from 'react-icons/wi';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.openNavbar = this.openNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions = () => {
        let prox = this.props.data;
        prox.screenWidth = window.innerWidth;
        this.props.updateState(prox);
    }

    openNavbar = () =>  {
        let prox = this.props.data;
        prox.mobileShow = true;
        this.props.updateState(prox);
    }

    closeNavbar = () =>  {
        let prox = this.props.data;
        prox.mobileShow = false;
        this.props.updateState(prox);
    }

    changeTheme = () => {
        let x = this.props.data;
        x.theme = !(this.props.data.theme);
        this.props.updateState(x);
    }


    render() {
        let links = this.props.data.links;
        const hideHeight = {height: "0%"};
        const showHeight = {height: "100%"};

        let themeColor = (this.props.data.theme)?this.props.data.lightTheme:this.props.data.darkTheme;
        return (
            <>
                <div id="myNav" className="overlay" style={(this.props.data.mobileShow)?showHeight:hideHeight} data-aos={"fade-left"}>
                    <button className="closebtn" onClick={this.closeNavbar} style={{backgroundColor: "#ffffff00", border: "0px", color:"white"}}>
                        <RiCloseCircleFill size={25}  />
                    </button>
                    <div className="overlay-content">
                        {
                            <>
                                {Object.keys(links).map((x,i) => <Link onClick={this.closeNavbar} key={i} to={links[x]}>{x}</Link> )}
                                {<li> <button onClick={this.changeTheme} className="btn btn-light btn-lg mt-2 text-center">Theme : {
                                    (this.props.data.theme)?<> Dark <WiMoonWaningGibbous1/></>:<> Light <WiMoonAltWaxingGibbous4/> </>
                                }</button> </li>}
                            </>
                        }
                    </div>
                </div>

                {/* Wider View */}
                <div className="container" data-aos={"fade-down"} >
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <h1><Link className="navbar-brand" to="/" style={{color: themeColor}}>SANDEEP SHAW</Link></h1>

                            {(this.props.data.screenWidth >= 992)? 
                            <ul className="navbar-nav">
                                {
                                    <>
                                        {Object.keys(links).map((x,i) => 
                                            <li className="linkBtn nav-item ms-2" key={i}>
                                                <Link className=" nav-link" to={links[x]} style={{color: themeColor}} >{x}</Link>
                                            </li>
                                        )}
                                        {<li> <button onClick={this.changeTheme} className="btn btn-light ms-4">{
                                            (this.props.data.theme)?<WiMoonWaningGibbous1/>:<WiMoonAltWaxingGibbous4/>
                                        }</button> </li>}
                                    </>
                                }
                            </ul>
                            :
                            <button className="mdButton" onClick={this.openNavbar}  style={(this.props.data.mobileShow)?hideHeight:showHeight} >
                                    <VscThreeBars style={{ color: themeColor }} />
                            </button>
                            }


                        </div>
                    </nav>
                </div>
            </>
        )
    }
}


export default Navbar;
