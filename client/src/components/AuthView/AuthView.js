import React, { Component } from 'react';
import logo from '../../logo.png';
import axios from 'axios';

export default class AuthView extends Component {
    auth() {
        axios.get('/api/auth/login')
            .then((res) => {
                console.log('Hit Endpoint')
            })
            .catch((err) => console.log(err));
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
                    <button className="AuthButton" onClick={() => this.auth()}><p>Login / Register</p></button>
                </div>
                
            </div>
        )
    }
}