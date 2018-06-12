import React, { Component } from "react"

import Main from "./Main"

import "./App.css"

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        uid: "234956789432798",
        userName: "Sammidysam"
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
