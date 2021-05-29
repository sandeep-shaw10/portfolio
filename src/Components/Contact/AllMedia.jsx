import React, { Component } from 'react'
import {SiCodechef, SiDribbble} from 'react-icons/si';
import {AiFillInstagram, AiOutlineGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {MyGeeksforGeeks, MyQuotes, MySoloLearn} from '../../Method/MyIcon'

export default class AllMedia extends Component {
    render() {
        return (

            <div className = "text-white mt-5" data-aos={"fade-down"}>
                <a className="mx-2" rel="noreferrer" target="_blank" href="https://www.codechef.com/users/shaw_sandeep"><SiCodechef size={50} color={this.props.color}  /></a>
                <a className="mx-2" rel="noreferrer" target="_blank" href="https://github.com/sandeep-shaw10"><AiOutlineGithub size={50} color={this.props.color} /></a>
                <a className="mx-2" rel="noreferrer" target="_blank" href="https://auth.geeksforgeeks.org/user/sandeep10shaw"><MyGeeksforGeeks color={this.props.color} size={60}/></a>
                <a className="mx-2" rel="noreferrer" target="_blank" href="https://www.sololearn.com/profile/15625221"><MySoloLearn size={50} color={this.props.color} /></a>
                <a className="mx-2" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sandeep-shaw-b47b47158/"><AiFillLinkedin size={50} color={this.props.color} /></a>
                <a className="mx-2" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCnzoz-Snqs689f1YLqi--zg"><AiFillYoutube size={50} color={this.props.color} /></a>
                <a className="mx-2" rel="noreferrer" target="_blank" href="https://www.instagram.com/san_deep_10/"><AiFillInstagram size={50} color={this.props.color} /></a>
                <a className="mx-2 mt-2" rel="noreferrer" target="_blank" href="https://www.yourquote.in/sandeep-shaw-b09xt/quotes"><MyQuotes color={this.props.color} size={45}/></a>
                <a className="mx-2 mt-2" rel="noreferrer" target="_blank" href="https://dribbble.com/sandeep10shaw"><SiDribbble color={this.props.color} size={40}/></a>
            </div>
        )
    }
}
