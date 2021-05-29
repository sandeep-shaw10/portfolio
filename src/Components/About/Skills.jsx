import React, { Component } from 'react'

export default class Skills extends Component {

    constructor(props){
        super(props)
        this.state = {
            skill: [
                { name: "HTML5", value: "90"},
                { name: "CSS3", value: "90"},
                { name: "JAVA", value: "85"},
                { name: "PYTHON", value: "80"},
                { name: "JAVASCRIPT", value: "80"},
                { name: "C", value: "80"},
                { name: "CPP", value: "75"},
                { name: "MYSQL", value: "70"},
                { name: "VBA", value: "70"},
                { name: "PHP", value: "60"},
            ]
        }
    }

    render() {
        let themeColor = (this.props.theme)?this.props.light:this.props.dark;
        let scrollColor = (!this.props.theme)?"#8d86c9":"#9db6d2";
        return (
            <>

            {this.state.skill.length && 
                <div className="skill-container container" data-aos={"fade-up"}>
                    <h1 className="text-center underline pt-5" style={{color: themeColor}}>LANGUAGES</h1>
                    <div className="row">
                
                    {this.state.skill.map((x, index) => 
                        <div className="col-md-6 px-4 mt-3"  key={index}>
                            <p className="m-0 p-0" style={{textAlign: "left", color: themeColor}}>{x.name}</p>
                            <div className="progress" data-aos={"fade-right"}>
                                <div className="progress-bar" role="progressbar" style={{width: x.value + "%", backgroundColor: scrollColor, color:this.props.dark}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{x.value}%</div>
                            </div>
                        </div>
                    )}

                    </div>
                </div> 
            }
                
            </>
        )
    }
}
