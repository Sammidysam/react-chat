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

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user)
      this.setState({ user })
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
    auth.signOut().then(() => {
      this.setState({ user: null })
      localStorage.removeItem("user")
    })
  }

  render() {
    const isLoggedIn = this.state.user
    const template = isLoggedIn ? <Main organization={this.state.organization} user={this.state.user} logOut={this.logOut} /> : <SignIn submit={this.logIn} />

    return (
      <div className="App">
        {template}
      </div>
    )
  }
}

export default App
