import React, { Component } from 'react';
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
import './About.css';
import Media from './Media';

export default class About extends Component {

    constructor(props){
        super(props)
        this.state = {
            about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, corrupti! Minus exercitationem quae vero fugiat sint! Quos blanditiis, assumenda odit ipsam eum omnis doloremque provident quo, tempore nostrum aliquid voluptate magnam, dolor totam distinctio ad placeat? Ut eos quibusdam, praesentium quidem sed nostrum odit expedita sequi voluptatibus provident, labore quia consequatur recusandae, nisi aperiam necessitatibus ad voluptatum distinctio quis error!",
            record: [
                {title: "Project", number: "999"},
                {title: "Project", number: "999"},
                {title: "Project", number: "999"},
                {title: "Project", number: "999"},
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
