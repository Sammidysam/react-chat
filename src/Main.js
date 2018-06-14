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
        const stateCopy = {...this.state}
        const currentRoomName = this.state.currentRoom
        const newKey = this.currentRoom().messages ? this.currentRoom().messages.length : 0
        const process = {rooms: {}}

        // Ensure that we can append the messages list by making it exist.
        if (!stateCopy.rooms[currentRoomName].messages)
            stateCopy.rooms[currentRoomName].messages = []

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

        const newState = update(stateCopy, process)

        this.setState(newState)
    }

    addRoom = (room) => {
        const rooms = {...this.state.rooms}
        rooms[room.name] = room
        this.setState({rooms, currentRoom: room.name})
    }

    render () {
        return (
            <div className="Main" style={styles}>
                <Sidebar organization={this.props.organization} user={this.props.user} rooms={this.state.rooms} logOut={this.props.logOut} changeRoom={this.changeRoom} addRoom={this.addRoom} />

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