import React, { Component } from 'react';
import home from '../../home.png';
import search from '../../search.png';
import {Link} from 'react-router-dom';

export default class Profile extends Component {
    render() {
        return (
            <div className="ProfileView">
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
                        <p>Profile</p>
                    </div>
                    <div className="NavRight">
                        <p>Logout</p>
                    </div>
                </div>

                <div className="ProfileUpper">
                    <div className="ProfileUpperLeft">
                        <img src="https://robohash.org/me" alt="avatar"/>
                        <h3>James Lemire</h3>
                    </div>
                    
                    <div className="ProfileUpperRight">
                        <button className="UpdateButton">Update</button>
                        <button className="CancelButton">Cancel</button>
                    </div>
                </div>

                <div className="ProfileLower">
                    <div className="ProfileLowerLeft">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="James"/>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Lemire"/>
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender">
                            <option>-- Select --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <label htmlFor="hairColor">Hair Color</label>
                        <select name="hairColor" id="hairColor">
                            <option>-- Select --</option>
                            <option value="Brown">Brown</option>
                            <option value="Blonde">Blonde</option>
                            <option value="Red">Red</option>
                            <option value="Gray">Gray</option>
                        </select>
                        <label htmlFor="eyeColor">Eye Color</label>
                        <select name="eyeColor" id="eyeColor">
                            <option>-- Select --</option>
                            <option value="Blue">Blue</option>
                            <option value="Brown">Brown</option>
                            <option value="Green">Green</option>
                            <option value="Hazel">Hazel</option>
                        </select>
                    </div>
                

                    <div className="ProfileLowerRight">
                        <label htmlFor="hobby">Hobby</label>
                        <select name="hobby" id="hobby">
                            <option>-- Select --</option>
                            <option value="Video Games">Video Games</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Fishing">Fishing</option>
                            <option value="Rafting">Rafting</option>
                        </select>
                        <label htmlFor="birthDay">Birthday Day</label>
                        <select name="birthDay" id="birthDay">
                            <option>-- Select --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <label htmlFor="birthMonth">Birthday Month</label>
                        <select name="birthMonth" id="birthMonth">
                            <option>-- Select --</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <label htmlFor="birthYear">Birthday Year</label>
                        <select name="birthYear" id="birthYear">
                            <option>-- Select --</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                        </select>
                    </div>

                </div>

            </div>
        )
    }
}
