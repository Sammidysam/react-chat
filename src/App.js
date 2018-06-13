import React, { Component } from "react"

import Main from "./Main"
import LogIn from "./LogIn"

import "./App.css"

class App extends Component {
  constructor () {
    super()

    this.state = {
      organization: "XTBC 18",
      user: null
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

  render() {
    const isLoggedIn = this.state.user
    const template = isLoggedIn ? <Main organization={this.state.organization} user={this.state.user} /> : <LogIn submit={this.logIn} />

    return (
      <div className="App">
        {template}
      </div>
    )
  }
}

export default App
