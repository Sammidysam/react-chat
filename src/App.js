import React, { Component } from "react"

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

  logIn = (name, password) => {
    this.setState({
      user: {
        uid: 4752489574289,
        userName: name,
        avatar: `url(https://api.adorable.io/avatars/40/${name}@gmail.com)`
      }
    })
  }

  logOut = () => {
    this.setState({ user: null })
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
