import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import SigninRoute from './components/signin/SigninRoute';
import PublicRoute from './components/public/PublicRoute';
import PrivateRoute from './components/private/PrivateRoute';

import LoginForm from './components/signin/login-section/loginform/LoginForm';
import SignupForm from './components/signin/signup-section/registForm/SignupForm'

import Home from './components/public/home/Home';

import Dashboard from './components/private/users/dashboard/Dashboard';
import UserProfile from './components/private/users/userProfile/Wrapper';
import Message from './components/private/users/message-section/Wrapper';
import Encounter from './components/private/users/encounter-section/encounters/Wrapper';
import Activity from './components/private/users/activity-section/activity/Activity';




function App() {
  return (
    <Router>
      <Switch>
        <SigninRoute exact path="/login" component={LoginForm} />
        <SigninRoute exact path="/signup" component={SignupForm} />

        <PublicRoute exact path="/" component={Home} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/user-profile" component={UserProfile} />
        <PrivateRoute exact path="/messages" component={Message} />
        <PrivateRoute exact path="/encounters" component={Encounter} />
        <PrivateRoute exact path="/activity" component={Activity} />
      </Switch>
    </Router>    
  );
}

export default App;
