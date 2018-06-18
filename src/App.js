import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import { auth } from "./base"

import Main from "./Main"
import SignIn from "./SignIn"

import "./App.css"

class App extends Component {
  constructor () {
    super()

    this.state = {
      organization: "XTBC 18"
    }
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user)
      this.setState({ user })

    auth.onAuthStateChanged(user => {
      if (user)
        this.logIn(user)
      else
        this.handleUnauth()
    })
  }

  logIn = (oathUser) => {
    const user = {
      uid: oathUser.uid,
      email: oathUser.email,
      displayName: oathUser.displayName,
      photoURL: oathUser.photoURL
    }

    this.setState({ user })
    localStorage.setItem("user", JSON.stringify(user))
  }

  logOut = () => {
    auth.signOut()
  }

  handleUnauth = () => {
    this.setState({ user: null })
    localStorage.removeItem("user")
  }

  render() {
    const isLoggedIn = this.state.user

    return (
      <div className="App">
        <Switch>
          <Route exact path="/sign-in" render={navProps => (
            isLoggedIn ? <Redirect to="/rooms/general" /> : <SignIn />
          )} />
          <Route path="/rooms/:roomName" render={navProps => (
            isLoggedIn ?
            <Main organization={this.state.organization} user={this.state.user} logOut={this.logOut} {...navProps} />
            : <Redirect to="/sign-in" />
          )}/>
          <Route render={navProps => (
            this.isLoggedIn ? <Redirect to="/rooms/general" /> : <Redirect to="/sign-in" />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
