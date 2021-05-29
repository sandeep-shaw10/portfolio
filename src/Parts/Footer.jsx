import React, { Component } from 'react'
import './Parts.css'

export default class Footer extends Component {
    render() {
        let themeColor = (!this.props.data.theme)?this.props.data.lightTheme:this.props.data.darkTheme;
        let waveColor =  (!this.props.data.theme)?"#8d86c9":"#9db6d2";
        return (
            <div className="home-pageLink">
                <div className="waveUp wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={waveColor} fillOpacity="1" d=        "M0,192L60,192C120,192,240,192,360,186.7C480,181,600,171,720,186.7C840,203,960,245,1080,256C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className="footer text-center py-4" style={{backgroundColor: waveColor, color:"white"}} >
                    <p className="lead mb-0" style={{color: themeColor}} >Sandeep Shaw </p>
                    <p className="small mb-0 p-0"  style={{color: themeColor}} >&copy; All Right Reserved 2021</p>  
                </div>
            </div>
        )
    }
}
