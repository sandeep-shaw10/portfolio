import React, { Component } from 'react'

export default class BetaSkills extends Component {
    constructor(props){
        super(props)
        this.state = {
            skill: [
                    { name: "bootstrap", link: "raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"},
                    { name: "chartjs", link: "www.chartjs.org/media/logo-title.svg"},
                    { name: "sass", link: "raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},

                    { name: "django", link: "raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg"},
                    { name: "electron", link: "raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"},

                    { name: "react", link: "raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"},
                    { name: "nodejs", link: "raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"},
                    
                    { name: "git", link: "www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"},
                    { name: "heroku", link: "www.vectorlogo.zone/logos/heroku/heroku-icon.svg"},

                    { name: "selenium", link: "raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg"},

                    { name: "ai", link: "www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"},
                    /*{ name: "ppt", link: "upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg"},*/
                    { name: "excel", link: "upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"},

            ]
        }
    }

    render() {
        let themeColor = (this.props.theme)?this.props.light:this.props.dark;
        return (
            <>

            {this.state.skill.length && 
                <div className="skill-container container mt-5" data-aos={"fade-up"}>
                    <h1 className="text-center underline pt-5" style={{color: themeColor}}>SKILLS</h1>
                    <div className="row">
                
                    {this.state.skill.map((x, index) => 
                        <div className="col-md-3 col-sm-4 col-lg-2 col-6 px-4 mt-5"  key={index} data-aos={"fade-zoom"}>
                            <img className="img-fluid" alt={x.name} src={"https://" + x.link} width="128" /> 
                        </div>
                    )}

                    </div>
                </div> 
            }
                
            </>
        )
    }
}
