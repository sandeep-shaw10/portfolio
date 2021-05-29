import React, { Component } from 'react'
import {AiFillInstagram, AiOutlineGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {FcBusinessContact} from 'react-icons/fc';

export default class Media extends Component {
    render() {
        return (
            <div className="col-md-12 mx-auto col-12 text-center mt-1"  data-aos={"fade-down"}>
                <div className="wrap-about p-2 rounded">
                    <div className="contact-about mt-5" >
                        <FcBusinessContact size={100}/>
                    </div>
                    <div className="container media-about">
                        <div className="row">
                            <div className="link col-md-3 col-sm-6 col-12 mt-5">
                                <a rel="noreferrer" href="https://www.instagram.com/san_deep_10/" target="_blank"><AiFillInstagram color={this.props.themeColor}  size={100} /></a>
                            </div>
                            <div className="link col-md-3 col-sm-6 col-12 mt-5">
                                <a rel="noreferrer" href="https://www.linkedin.com/in/sandeep-shaw-b47b47158/" target="_blank"><AiFillLinkedin color={this.props.themeColor}  size={100} /></a>
                            </div>
                            <div className="link col-md-3 col-sm-6 col-12 mt-5">
                                <a rel="noreferrer" href="https://github.com/sandeep-shaw10" target="_blank"><AiOutlineGithub color={this.props.themeColor}  size={100} /></a>
                            </div>
                            <div className="link col-md-3 col-sm-6 col-12 mt-5">
                                <a rel="noreferrer" href="https://www.youtube.com/channel/UCnzoz-Snqs689f1YLqi--zg" target="_blank"><AiFillYoutube color={this.props.themeColor}  size={100} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
