import React, { Component } from 'react'

export default class Error extends Component {
    
    render() {
        let themeColor = (this.props.theme)?this.props.light:this.props.dark;
        return (
            <>
                <div className="container my-5 pt-5">
                    <div className="jumbotron jumbotron-fluid text-center">
                        <div className="container" style={{color: themeColor}} >
                            <h1 className="display-4">ERROR 404 !</h1>
                            <p className="lead">
                                This page don't exist or is unavailable
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
