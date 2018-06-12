import React, { Component } from "react"

import Main from "./Main"

import "./App.css"

class App extends Component {
  constructor () {
    super()

    this.state = {
      organization: "XTBC 18",
      user: {
        uid: "234956789432798",
        userName: "Sammidysam",
        avatar: "url(https://avatars1.githubusercontent.com/u/3077078?s=400&u=241e48febff57a2d9daf4940870f1a0cc84979fc&v=4)"
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main organization={this.state.organization} user={this.state.user} />
      </div>
    )
  }
}

export default App
