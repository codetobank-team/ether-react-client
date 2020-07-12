import React from 'react';
import './App.css';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './Store/actionCreators';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">
      WELCOME TO CODE BUSTERS!
      <Route exact path='/' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/dashboard' render={props => authCheck(Dashboard, props)} />
    </div>
  );
}

function authCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/login' />
}

export default withRouter(connect(state => state, actionCreators)(App))
