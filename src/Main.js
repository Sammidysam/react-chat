import React, { Component } from "react"

import Sidebar from "./Sidebar"
import Chat from "./Chat"

class Main extends Component {
    constructor () {
        super()

        this.state = {
            roomId: 0,
            rooms: [
                {
                    id: 0,
                    name: "general",
                    description: "Announcements and general chat"
                },
                {
                    id: 1,
                    name: "random",
                    description: "Useless banter"
                }
            ]
        }
    }

    changeRoom = (room) => {
        this.setState({ roomId: room.id })
    }

    render () {
        return (
            <div className="Main" style={styles}>
                <Sidebar organization={this.props.organization} user={this.props.user} rooms={this.state.rooms} logOut={this.props.logOut} changeRoom={this.changeRoom} />

                <Chat key={this.state.roomId} user={this.props.user} room={this.state.rooms[this.state.roomId]} />
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