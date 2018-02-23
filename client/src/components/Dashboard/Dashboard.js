import React, { Component } from 'react';
import home from '../../home.png';
import search from '../../search.png';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="DashboardView">
                <div className="NavBar">
                    <div className="NavLeft">
                        <h2 className="NavChild">Helo</h2>
                        <Link to='/dashboard'>
                        <img className="NavChild" src={home} alt="home"/>
                        </Link>
                        
                        <Link to='/search'>
                        <img className="NavChild" src={search} alt="search"/>
                        </Link>
                    </div>
                    <div className="NavCenter">
                        <p>Dashboard</p>
                    </div>
                    <div className="NavRight">
                        <p>Logout</p>
                    </div>
                </div>

                <div className="DashboardUpper">
                    <div className="DashboardLeft">
                        <div className="DashLeftLeft">
                            <img src="https://robohash.org/me" alt="avatar"/>
                        </div>
                        <div className="DashLeftRight">
                            <h3>James Lemire</h3>
                            <Link to='/profile'>
                            <button>Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                    <div className="DashboardRight">
                        <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
                    </div>
                </div>

                <div className="DashboardLower">
                    <div className="DashTitle">
                        <div className="DashRec">
                            <h4>Recommended Friends</h4>
                        </div>
                        <div className="DashSort">
                            <p>Sorted by</p>
                            <select>
                                <option value="firstName">First Name</option>
                                <option value="lastName">Last Name</option>
                                <option value="gender">Gender</option>
                                <option value="hairColor">Hair Color</option>
                                <option value="eyeColor">Eye Color</option>
                                <option value="hobby">Hobby</option>    
                                <option value="birthDay">Birth Day</option>
                                <option value="birthMonth">Birth Month</option>
                                <option value="birthYear">Birth Year</option>
                            </select>
                        </div>
                    </div>

                    <div className="Recommended">
                          <p>No recommendations</p>
                    </div>
                </div>
            </div>
        )
    }
}