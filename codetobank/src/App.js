import React from 'react';
import './reset.css';
import './App.css';
import { Route, Redirect, withRouter, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './Store/actionCreators';
import Container from './Components/Container';
import Register from './Components/Register';
import Login from './Components/Login';
import {createBrowserHistory} from 'history';


export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path='/' component={Register} />
        <Route exact path='/login' component={Login} />
        {/* <Route path='/app' component={Container} /> */}
        <Route path='/app' render={props => authCheck(Container, props)} />
      </Router>
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
