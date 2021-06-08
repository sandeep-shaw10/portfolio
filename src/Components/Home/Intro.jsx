import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Intro extends Component {

    constructor(props){
        super(props)
        this.state = {
                skills : [
                    'Web Developer  ',
                    'Student  ',
                    'Graphic Designer  ',
                    'Programmer  ',
                ],
                display : "",
                linkResume : "https://drive.google.com/file/d/1x1ZamJ1XmhMcVYDb1Nc9Da9jsnS1Vqet/view",
                typeData : [""],
                count: 0,
            }
        this.typeEffect = this.typeEffect.bind(this);
    }

    typeEffect = () => {
        let skills = this.state.skills;
        var animate = [];

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
        }
        this.setState({ typeData: animate, display:animate[0]  })
        console.log(animate)
        
    }

    componentDidMount(){
        this.typeEffect();
        this.typeInterval = setInterval(() => {
            this.setState({
                count: (this.state.count + 1) % this.state.typeData.length,
                display: this.state.typeData[this.state.count],
            })
        }, 100);
    }

    componentWillUnmount(){
        clearInterval(this.typeInterval)
    }

    render() {
        let themeColor = (this.props.data.theme)?this.props.data.lightTheme:this.props.data.darkTheme;
        return (
            <div className="intro container">
                <div className="wrap">
                    <h1 style={{color: themeColor}}>I'm</h1>
                    <h2 id="typeEffect" style={{color: themeColor}} >{this.state.display}|</h2>
                    <div className="btn-group btn-group-lg mt-3" role="group" aria-label="Basic mixed styles example" >
                        <a rel="noreferrer"  className="btn lead" target="_blank" href={this.state.linkResume} style={{backgroundColor: "#9db6d2", color: this.props.data.lightTheme}}> Resume  </a>
                        <Link className="btn lead" to="/contact" style={{backgroundColor: "#8d86c9", color: this.props.data.lightTheme}}> Contact </Link>
                    </div>
                </div>
            </div>
        )
    }
}
