import React, { Component } from 'react';
import logo from '../../logo.png';


export default class AuthView extends Component {
    auth() {
        window.open('http://localhost:3001/api/auth/login');
    }

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
                    <button className="AuthButton" onClick={() => this.auth()}><a href='https://localhost:3001/api/auth/login'><p>Login / Register</p></a></button>
                </div>
                
            </div>
        )
    }
}