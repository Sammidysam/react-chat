import React, { Component } from "react"

import Sidebar from "./Sidebar"
import Chat from "./Chat"

class Main extends Component {
    constructor () {
        super()

        this.state = {
            currentRoom: "general",
            rooms: {
                general: {
                    id: 0,
                    name: "general",
                    description: "Announcements and general chat",
                    messages: []
                },
                random: {
                    id: 1,
                    name: "random",
                    description: "Useless banter",
                    messages: []
                }
            }
        }
    }

    currentRoom = () => {
        return this.state.rooms[this.state.currentRoom]
    }

    changeRoom = (room) => {
        this.setState({ currentRoom: room.name })
    }

    render () {
        return (
            <div className="Main" style={styles}>
                <Sidebar organization={this.props.organization} user={this.props.user} rooms={this.state.rooms} logOut={this.props.logOut} changeRoom={this.changeRoom} />

                <Chat user={this.props.user} room={this.currentRoom()} />
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