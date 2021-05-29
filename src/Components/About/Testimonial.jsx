import React, { Component } from 'react'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';


export default class Testimonial extends Component {
    constructor(props){
        super(props)
        this.state = {
            testimonial:[
                {
                    name: "Sandeep Shaw",
                    position: "Student",
                    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti similique voluptate praesentium sit illum cumque perspiciatis, ad asperiores pariatur aliquid molestias, quod error natus doloremque? Accusamus, expedita dolorem? Autem aut nulla dolore incidunt sint nobis, tempore inventore quod quo voluptatum optio magni, esse, debitis maxime dicta nisi quis? Labore."
                },
                {
                    name: "Sandeep Shaw 1",
                    position: "Student",
                    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti similique voluptate praesentium sit illum cumque perspiciatis, ad asperiores pariatur aliquid molestias, quod error natus doloremque? Accusamus, expedita dolorem? Autem aut nulla dolore incidunt sint nobis, tempore inventore quod quo voluptatum optio magni, esse, debitis maxime dicta nisi quis? Labore."
                },
                {
                    name: "Sandeep Shaw 2",
                    position: "Student",
                    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti similique voluptate praesentium sit illum cumque perspiciatis, ad asperiores pariatur aliquid molestias, quod error natus doloremque? Accusamus, expedita dolorem? Autem aut nulla dolore incidunt sint nobis, tempore inventore quod quo voluptatum optio magni, esse, debitis maxime dicta nisi quis? Labore."
                }
            ]
        }
    }
    render() {
        let themeColor = (this.props.theme)?"#9db6d2":"#8d86c9";
        let themeBg = (!this.props.theme)?this.props.light:this.props.dark;
        let themeBgX = (this.props.theme)?this.props.light:this.props.dark;
        return (
                <>
                {this.state.testimonial && 
                    <div className="testimonial-container container mt-5" data-aos={"zoom-in"}>
                        <h1 className="text-center underline pt-5" style={{color: themeBgX}}>TESTIMONIALS</h1>
                        <div className="row">

                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    {this.state.testimonial.map((x, index) => 
                                        <div  key={index} className={(index===0)? "carousel-item active":"carousel-item"}>
                                            <div className="col-md-10 col-12 px-4 mt-2 mx-auto" style={{backgroundColor: themeColor, borderRadius: "25px"}} >
                                                <div className="wrap p-4" style={{color: themeBg}}>
                                                <ImQuotesLeft size={30} />
                                                    <p className="lead lead-custom pt-2">
                                                        {x.about}
                                                    </p>
                                                <ImQuotesRight size={30} />

                                                <h2 className="pt-4"> <i>{x.name}</i> </h2>
                                                <p className="lead lead-custom"> <i>( {x.position} )</i> </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>

                            </div>

                        </div>
                    </div> 
                }

               </>
        )
    }
}
