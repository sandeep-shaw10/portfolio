import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Resume from './Resume.pdf'

export default class Intro extends Component {

    constructor(props){
        super(props)
        this.state = {
                skills : [
                    'Web Developer',
                    'Student',
                    'Graphic Designer',
                    'Programmer',
                ],
                display : "",
            }
        this.typeEffect = this.typeEffect.bind(this);
        this.calTypeEffect = this.calTypeEffect.bind(this);
    }

    typeEffect = () => {
        let skills = this.state.skills;
        var animate = [];
        let self = this;

        for(let m=0; m<skills.length; m++)
        {
            let show = " ";
            for(let i=0; i<skills[m].length; i++){
                show += skills[m][i];
                //console.log(show)
                animate.push(show)
            }

            for(let i=skills[m].length; i>=0; i--){
                //console.log(show.substring(0,i))
                animate.push(show.substring(0,i))
            }
            //console.log(animate)

            for(let k=0; k<animate.length; k++){
                this.timeId = setTimeout(function () {
                    self.setState({ display:animate[k]});
                }, (k + 1) * 100);
            }
        }
        
    }

    calTypeEffect = () => {
        let time = 0;
        let words = this.state.skills.length;

        for(let i=0; i<words; i++){
            for(let j=0; j<this.state.skills[i].length; j++){
                time++;
            }
        }

        return(2*time + words);

    }

    componentDidMount(){
        let self = this;

        let timer = this.calTypeEffect()*100 + 10;

        self.typeEffect();
        this.intervalID = setInterval(function() {
            self.typeEffect()
        }, timer);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
        clearTimeout(this.timeId);
    }

    render() {
        let themeColor = (this.props.data.theme)?this.props.data.lightTheme:this.props.data.darkTheme;
        return (
            <div className="intro container">
                <div className="wrap">
                    <h1 style={{color: themeColor}}>I'm</h1>
                    <h2 id="typeEffect" style={{color: themeColor}} >{this.state.display}|</h2>
                    <div className="btn-group btn-group-lg mt-3" role="group" aria-label="Basic mixed styles example" >
                        <Link className="btn lead" target="_blank" to={Resume} style={{backgroundColor: "#9db6d2", color: this.props.data.lightTheme}} download> Resume  </Link>
                        <Link className="btn lead" to="/contact" style={{backgroundColor: "#8d86c9", color: this.props.data.lightTheme}}> Contact </Link>
                    </div>
                </div>
            </div>
        )
    }
}
