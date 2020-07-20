import React from 'react';
import './reset.css';
import './App.css';
import { Route, Redirect, withRouter, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './Store/actionCreators';
import Container from './Components/Container';
import Register from './Components/Register';
import Login from './Components/Login';
import { createBrowserHistory } from 'history';
import AboutUs from './Components/AboutUs';


export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/team' component={AboutUs} />
        {/* <Route path='/app/dashboard' component={Container} /> */}
        <Route path='/app/' render={props => authCheck(Container, props)} />
      </Router>
    </div>
  );
}

function authCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/' />
}

export default withRouter(connect(state => state, actionCreators)(App))
