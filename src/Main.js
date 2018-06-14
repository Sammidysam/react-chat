import React, { Component } from "react"
import update from "immutability-helper"

import Sidebar from "./Sidebar"
import Chat from "./Chat"

import base from "./base"

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

    componentDidMount () {
        base.syncState("rooms", {
            context: this,
            state: "rooms",
            asArray: false
        })
    }

    currentRoom = () => {
        return this.state.rooms[this.state.currentRoom]
    }

    changeRoom = (room) => {
        this.setState({ currentRoom: room.name })
    }

    addMessage = (body) => {
        const currentRoomName = this.state.currentRoom
        const newKey = this.currentRoom().messages.length
        const process = {rooms: {}}
        process.rooms[currentRoomName] = {
            messages: {
                $push: [{
                    id: newKey,
                    user: this.props.user,
                    body: body,
                    time: Date.now()
                }]
            }
        }

        const newState = update(this.state, process)

        this.setState(newState)
    }

    render () {
        return (
            <div className="Main" style={styles}>
                <Sidebar organization={this.props.organization} user={this.props.user} rooms={this.state.rooms} logOut={this.props.logOut} changeRoom={this.changeRoom} />

                <Chat user={this.props.user} room={this.currentRoom()} addMessage={this.addMessage} />
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