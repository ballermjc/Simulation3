import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="DashboardView">
                <div className="NavBar">
                    <h1>Helo</h1>
                    <h1>Home</h1>
                    <h1>Search</h1>
                    <h1>Dashboard</h1>
                    <h1>Logout</h1>
                </div>

                <div className="DashboardUpper">
                    <div className="DashboardLeft">
                        <div className="DashLeftLeft">
                            <img src="https://robohash.org/me" alt="avatar"/>
                        </div>
                        <div className="DashLeftRight">
                            <h3>James Lemire</h3>
                            <button>Edit Profile</button>
                        </div>
                    </div>
                    <div className="DashboardRight">
                        <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
                    </div>
                </div>

                <div className="DashboardLower">
                    <h1>Lower</h1>
                </div>
            </div>
        )
    }
}