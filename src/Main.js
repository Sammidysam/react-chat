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
        const availableRoomKeys = Object.keys(this.state.rooms).filter(k => this.canSeeRoom(this.state.rooms[k]))

        // Conditions for forcefully changing the current room:
        // - a room exists, but we are currently not on it
        // - we are not allowed to see the currently selected room
        // make sure not to do this when the room name is "new" or "newdm"
        if (!availableRoomKeys.includes(this.state.currentRoom) && this.state.currentRoom !== "new" && this.state.currentRoom !== "newdm" && this.props.match.params.roomName !== "new" && this.props.match.params.roomName !== "newdm" && availableRoomKeys.length > 0) {
            this.setState({ currentRoom: availableRoomKeys[0] })
            this.props.history.push(`/rooms/${availableRoomKeys[0]}`)
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
        const { user } = this.props

        // Ensure that the current user is in a private room that they create.
        if (!room.public) {
            if (room.users) {
                if (!room.users.map(u => u.uid).includes(this.props.user.uid))
                    room.users.push(user)
            } else {
                room.users = [user]
            }
        }

        rooms[room.name] = room
        this.setState({rooms, currentRoom: room.name})
    }

    removeRoom = (room) => {
        const rooms = {...this.state.rooms}
        rooms[room.name] = null
        this.setState({rooms})
    }

    myRooms = () => {
        return Object.keys(this.state.rooms).filter(r => (
            this.canSeeRoom(this.state.rooms[r]) && !this.state.rooms[r].dm
        )).map(k => (
            this.state.rooms[k]
        ))
    }

    myDMs = () => {
        return Object.keys(this.state.rooms).filter(r => (
            this.canSeeRoom(this.state.rooms[r]) && this.state.rooms[r].dm
        )).map(k => (
            this.state.rooms[k]
        ))
    }

    canSeeRoom = (room) => {
        return room.public || (room.users && this.props.user && room.users.map(u => u.uid).includes(this.props.user.uid))
    }

    otherUser = (room) => {
        const user = room.users.find(u => u.uid !== this.props.user.uid)
        return user && user.displayName
    }

    render () {
        return (
            <div className="Main" style={styles}>
                <Sidebar organization={this.props.organization} user={this.props.user} users={this.props.users} rooms={this.myRooms()} dms={this.myDMs()} logOut={this.props.logOut} addRoom={this.addRoom} otherUser={this.otherUser} />

                <Chat user={this.props.user} room={this.currentRoom()} addMessage={this.addMessage} removeRoom={this.removeRoom} users={this.props.users} otherUser={this.otherUser} />
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