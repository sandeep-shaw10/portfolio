import React, { Component } from 'react';
import {projectData, categoryData} from './Data';
import './Project.css';


export default class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            category : categoryData,
            filtered : projectData,
            selected : null,
        }
        this.filterProject = this.filterProject.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleHeading = this.handleHeading.bind(this);
    }

    filterProject = (val) => {
        this.setState({ selected: val }, this.handleFilter);
    }

    handleFilter = () => {
       if(this.state.selected !== null){
           let select = this.state.selected;
            let copyArray = projectData.filter((x) => x.category.includes(select));
            this.setState({
                filtered: copyArray,
            });
       }
    }

    handleHeading = () => {
        let x = "PROJECT";
        if(this.state.selected !== null){
            x = this.state.selected.toUpperCase();
        }
        return (x);
    }

    render() {
        let themeColor = (this.props.theme)?this.props.light:this.props.dark;
        let themeBg = (!this.props.theme)?"#9db6d2":"#8d86c9";
        let themeBgNot = (this.props.theme)?"#9db6d2":"#8d86c9";
        return (
            <>
                <div className="container">
                    <h1 className="text-center underline pt-5 mb-2" style={{color: themeColor}} data-aos={"fade-down"}>{this.handleHeading()}</h1> 
                    <div className="buttonGroup container my-3">
                        <div className="row text-center">

                            {this.state.category.map((x, index) => 
                                <div className="col my-2" key={index} data-aos={"fade-down"}> 
                                    <button onClick={() => this.filterProject(x)} className="btn btn-sm" style={{color: themeColor, backgroundColor: themeBg}}>{x}</button>
                                </div>)
                            }

                        </div>
                    </div>
                    <div className="row mt-5">
                        {this.state.filtered.map((x, index) => 
                            <div className="col-lg-4 col-md-6 col-sm-12 my-2 wrapDiv" key={index} data-aos={"zoom-in"}>
                                <a target="_blank" href={x.projectLink} rel="noreferrer" >
                                <div className="wrap allDiv" style={{backgroundColor: themeBgNot}}>
                                    <div className="container m-0 p-0">
                                        <div className="row">
                                            <div className="col-12 imageDiv">
                                                <img src={x.imgLink} alt={x.name} className="img-fluid" />
                                            </div>
                                            <div className="col-12 infoDiv mt-3">
                                                <div className="wrapped">
                                                    <h2 style={{color: this.props.dark}}>{x.name}</h2>
                                                    <p style={{color: this.props.dark}}>
                                                        {x.about}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        )}   
                    </div>
                </div>
            </>
        )
    }
}

