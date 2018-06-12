import React, { Component } from "react"

import Sidebar from "./Sidebar"
import Chat from "./Chat"

class Main extends Component {
    constructor () {
        super()

        this.state = {
            room: {
                id: 0,
                name: "general",
                description: "Announcements and general chat"
            }
        }
    }

    render () {
        return (
            <div className="Main" style={styles}>
                <Sidebar organization={this.props.organization} user={this.props.user} />

                <Chat user={this.props.user} room={this.state.room} />
            </div>
        )
    }
}

const styles = {
    display: "flex",
    alignItems: "stretch",
    height: "100vh"
}

export default Main