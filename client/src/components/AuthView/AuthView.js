import React, { Component } from 'react';
import logo from '../../logo.png';


export default class AuthView extends Component {

    render() {
        return(
            <div className="AuthView">
                <div className="InnerAuthView">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="Helo">
                        <h1>Helo</h1>
                    </div>
                    <div className="AuthButton">
                        <a href='http://localhost:3001/api/auth/login'>Login / Register</a>
                    </div>
                </div>
                
            </div>
        )
    }
}