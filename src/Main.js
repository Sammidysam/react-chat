import React, { Component } from "react"
import update from "immutability-helper"

import Sidebar from "./Sidebar"
import Chat from "./Chat"

import base from "./base"

class Main extends Component {
    constructor (props) {
        super(props)

        this.state = {
            currentRoom: "general",
            rooms: {}
        }
    }

    componentDidMount () {
        base.syncState("rooms", {
            context: this,
            state: "rooms",
            asArray: false,
            then: () => {
                this.loadRoom({
                    name: this.props.match.params.roomName
                })
            }
        })
    }

    componentDidUpdate (prevProps) {
        // Check to make sure that our current room is set to something, if it can be.
        const roomKeys = Object.keys(this.state.rooms)

        if (roomKeys.length > 0 && ((!this.state.rooms[this.state.currentRoom] || this.state.rooms[this.state.currentRoom.name !== this.props.match.params.roomName]) && this.props.match.params.roomName !== "new")) {
            this.setState({ currentRoom: roomKeys[0] })
            this.props.history.push(`/rooms/${roomKeys[0]}`)
        }

        if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
            this.loadRoom({
                name: this.props.match.params.roomName
            })
        }
    }

    loadRoom = (room) => {
        this.setState({ currentRoom: room.name })
    }

    currentRoom = () => {
        return this.state.rooms[this.state.currentRoom]
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
                    createdAt: Date.now()
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

    removeRoom = (room) => {
        const rooms = {...this.state.rooms}
        rooms[room.name] = null
        this.setState({rooms})
    }

    render () {
        return (
            <div className="Main" style={styles}>
                <Sidebar organization={this.props.organization} user={this.props.user} users={this.props.users} rooms={this.state.rooms} logOut={this.props.logOut} addRoom={this.addRoom} />

                <Chat user={this.props.user} room={this.currentRoom()} addMessage={this.addMessage} removeRoom={this.removeRoom} />
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