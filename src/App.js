import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

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
    console.log(this.state.user)

    return (
      <div className="App">
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route path="/rooms/:roomName" render={navProps => <Main organization={this.state.organization} user={this.state.user} logOut={this.logOut} {...navProps} />} />
        </Switch>
      </div>
    )
  }
}

export default App
