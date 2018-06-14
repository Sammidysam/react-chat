import React, { Component } from "react"

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

  componentDidMount() {
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
    const template = isLoggedIn ? <Main organization={this.state.organization} user={this.state.user} logOut={this.logOut} /> : <SignIn />

    return (
      <div className="App">
        {template}
      </div>
    )
  }
}

export default App
