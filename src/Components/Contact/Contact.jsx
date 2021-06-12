import React, { Component } from 'react';
import AllMedia from './AllMedia';
import Form from './Form';

export default class Contact extends Component {

    render() {
        let themeColor = (this.props.theme)?this.props.light:this.props.dark;
        let themeBg = (!this.props.theme)?"#9db6d2":"#8d86c9";
        //let themeBgNot = (this.props.theme)?"#9db6d2":"#8d86c9";
        return (
            <div className="container " >
                <h1 className="text-center underline pt-5 mb-4" style={{color: themeColor}}>CONTACT</h1> 
                <div className="container mt-5 p-3" style={{backgroundColor: themeBg}}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            {console.warn("Google Map API scroll warning")}
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.480006828726!2d88.36168653002676!3d22.621329162521988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d863d23ee2f%3A0x25291926882ed35!2sCossipore%2C%20Kolkata%2C%20West%20Bengal%20700002!5e0!3m2!1sen!2sin!4v1620815315034!5m2!1sen!2sin"
                              style = {{width: '100%', height:'500px', border:"0"}} frameBorder="0px" allowFullScreen />
                        </div>
                        <div className="col-12 col-md-6" data-aos={"fade-up"}>
                            <Form themeColor={themeColor} />
                            <AllMedia color={themeColor} />
                        </div>
                    </div>     
                </div>
            </div>
        )
    }
}
