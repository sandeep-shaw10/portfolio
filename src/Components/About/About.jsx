import React, { Component } from 'react';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
import './About.css';
import Media from './Media';

export default class About extends Component {

    constructor(props){
        super(props)
        this.state = {
            about: "A Coding Pragmatist, Data Structure, and Algorithm explorer with experience in Dynamic Programming. My programming tools include CPP, Java, C, and Python. Also an Innovative and enthusiast Web Developer with 2+ years of experience in Front-end development and on my way towards Full Stack Web Development. I've built some projects individually and sometimes as a part of a group ranging from static to dynamic websites, basic desktop applications along with some real-life projects.",
            record: [
                {title: "Projects", number: "14"},
                {title: "Articles", number: "3"},
                {title: "Testimonials", number: "0"},
                {title: "Clients", number: "3"},
            ]
        }
    }

    render() {
        let themeColor = (this.props.theme)?this.props.light:this.props.dark;
        return (
            <div className="about-container container pb-4">
                <h1 className="text-center underline pt-5" style={{color: themeColor}} data-aos={"fade-up"}>ABOUT</h1>
                <div className="row mt-4">
                    <div className="col-md-9 mx-auto col-12 text-center mt-1" data-aos={"fade-up"}>
                        <div className="wrap p-2" >
                            <p className="lead lead-custom text-justify p-4" style={{color: themeColor}}> 
                                <ImQuotesLeft /> {this.state.about} <ImQuotesRight />
                            </p>
                        </div>
                    </div>

                    <Media themeColor={themeColor} />
            
                    <div className="container about-count my-4 py-4">
                        <div className="row text-center" >
                            {this.state.record && 
                                this.state.record.map((x,index) => 
                                    <div className="col-md-3 col-sm-6 col-12 mt-5" key={index} data-aos={"fade-up"}>
                                        <div className="wrap" style={{color: themeColor}}>
                                            <h1>{x.number}</h1>
                                            <h1 className="lead">{x.title}</h1>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
