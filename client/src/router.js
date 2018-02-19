import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthView from './components/AuthView/AuthView';
import Dashboard from './components/Dashboard/Dashboard';
import ProfileView from './components/ProfileView/ProfileView';
import SearchView from './components/SearchView/SearchView';

export default (
    <Switch>
        <Route exact path='/' component={AuthView}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/profile' component={ProfileView}/>
        <Route path='/search' component={SearchView}/>
    </Switch>
)
