import React, { Component } from 'react';
import router from './router';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

let mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
