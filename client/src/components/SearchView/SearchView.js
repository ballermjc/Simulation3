import React, { Component } from 'react';
import home from '../../home.png';
import search from '../../search.png';
import {Link} from 'react-router-dom';

export default class Search extends Component {
    render() {
        return (
            <div className="SearchView">
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
                        <p>Search</p>
                    </div>
                    <div className="NavRight">
                        <p>Logout</p>
                    </div>
                </div>

                <div className="SearchContent">
                    <div className="SearchUpper">
                        <select name="searchSelect" id="searchSelect">
                            <option>-- Select --</option>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="gender">Gender</option>
                            <option value="hairColor">Hair Color</option>
                            <option value="eyeColor">Eye Color</option>
                            <option value="hobby">Hobby</option>
                            <option value="birthDay">Birthday Day</option>
                            <option value="birthMonth">Birthday Month</option>
                            <option value="birthYear">Birthday Year</option>
                        </select>
                        <input type="text" name="searchText" id="searchText"/>
                        <button className="SearchButton">Search</button>
                        <button className="ResetButton">Reset</button>
                    </div>
                    
                <div className="SearchLower">
                    <div className="SearchLowerLeft">
                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>

                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>

                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>

                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>

                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>
                    </div>

                    <div className="SearchLowerRight">
                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>

                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>

                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>

                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>

                        <div className="SearchPanel">
                            <img src="https://robohash.org/me" alt="avatar"/>
                            <h3>James Lemire</h3>
                            <button className="AddFriendButton">Add Friend</button>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        )
    }
}
