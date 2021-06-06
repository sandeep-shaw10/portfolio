import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image1 from '../Method/Picture1.png'
import Image2 from '../Method/Picture2.png'

import{FcReadingEbook, FcKindle, FcContacts} from 'react-icons/fc'

export default class Linker extends Component {

    constructor(props){
        super(props)
        this.state = {
            explore : [
                {
                    content: "Check out some of the programming and scripting languages that I'm interested in and can work comfortably in it. It also includes some of the application libraries, frameworks, and essential tools used nowadays.",
                    button: "Skills",
                    image: Image2,
                    linkTo: "/about",
                    btnColor: "#9db6d2",
                    icon: <FcReadingEbook size={100} />
                },
                {
                    content: "Look at some of my portfolios collection. Most projects are done individually and sometimes as a part of a group ranging from static to dynamic websites, basic desktop applications along with some real-life projects.",
                    button: "Project",
                    image: Image1,
                    linkTo: "/project",
                    btnColor: "#8d86c9",
                    icon: <FcKindle size={100} />
                },
                {
                    content: "For any query oriented towards programming or project-related discussion please feel free to contact me through emails or various social media handlers by clicking the button below. ",
                    button: "Contact",
                    image: Image2,
                    linkTo: "/contact",
                    btnColor: "#9db6d2",
                    icon: <FcContacts size={100} />
                },
            ]
        }
    }
  render() {
    let themeColor = (this.props.theme)?this.props.light:this.props.dark;
    const iconify = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
    return (
      <>


        {(this.state.explore.length) && 

            <div className="container my-5">
                <h1 className="text-center underline pt-5" style={{color: themeColor}}>EXPLORE</h1>
                <div className="row">

                    {this.state.explore.map((x,index) => 
                        <div className="col-12 my-4" key={index} >
                            <div className="wrap">
                                <div className="container" data-aos={"fade-up"}>
                                    <div className="row">
                                        <div className="col-md-4" style={{position: "relative"}}>
                                            <img alt={x.button} className="img-fluid link-img" src={x.image} />
                                            <div className="iconImg" style={iconify}>
                                                {x.icon}
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="content-link p-4 ">
                                                <p className="lead lead-custom-lg" style={{color: themeColor}}>{x.content}</p>
                                                <Link to={x.linkTo} className="btn btn-lg" style={{ backgroundColor: x.btnColor, color: "white" }}>
                                                    {x.button}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        }
      </>
    );
  }
}
