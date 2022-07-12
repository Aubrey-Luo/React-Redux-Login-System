import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../pages/App'
import SignUpPage from '../pages/SignUp/SignUpPage'
import SignInPage from '../pages/SignIn/SignInPage'
import HeaderNav from '../components/HeaderNav'

export default class index extends Component {
  render() {
    return (
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/signup" component={SignUpPage}></Route>
          <Route path="/signin" component={SignInPage}></Route>
        </Switch>
      </Router>
    )
  }
}
