import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"

import RoomLink from "./RoomLink"
import RoomForm from "./RoomForm"

class RoomList extends Component {
    constructor () {
        super()

        this.state = {
            showRoomForm: false
        }
    }

    showRoomForm = () => {
        this.setState({ showRoomForm: true })
    }
    
    hideRoomForm = () => {
        this.setState({ showRoomForm: false })
    }

    render () {
        if (this.state.showRoomForm) {
            return <RoomForm hideRoomForm={this.hideRoomForm} />
        } else {
            return (
                <nav className="RoomList" style={this.props.style}>
                    <div className={css(styles.heading)}>
                    <h2 className={css(styles.h2)}>Rooms</h2>
                    <button
                        className={css(styles.button)}
                        onClick={this.showRoomForm}
                    >
                        <i className="fas fa-plus-circle" title="Add room"></i>
                    </button>
                    </div>
                    <ul className={css(styles.ul)}>
                        {Object.keys(this.props.rooms).map(roomName => <RoomLink key={roomName} room={this.props.rooms[roomName]} changeRoom={this.props.changeRoom} />)}
                    </ul>
                </nav>
            )
        }
    }
}

const styles = StyleSheet.create({
    nav: {
        padding: "0 1rem",
    },
    h2: {
        fontSize: "1rem"
    },
    ul: {
        listStyle: "none",
        marginLeft: 0,
        paddingLeft: 0
    },
    heading: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
    
      button: {
        border: 0,
        backgroundColor: "transparent",
        outline: 0,
        padding: 0,
        fontSize: "1rem",
        color: "rgba(255,255,255, 0.4)",
        cursor: "pointer",
        transition: "color 0.25s ease-out",
    
        ":hover": {
          color: "white",
        }
    }
})

export default RoomList