import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"
import { Route, Switch, Link } from "react-router-dom"

import RoomLink from "./RoomLink"
import RoomForm from "./RoomForm"

class RoomList extends Component {
    render () {
        return (<Switch>
            <Route path="/rooms/new" render={navProps => (<RoomForm addRoom={this.props.addRoom} users={this.props.users} user={this.props.user} {...navProps} />)} />
            <Route path="/rooms/newdm" render={navProps => (<RoomForm addRoom={this.props.addRoom} dms={true} user={this.props.user} users={this.props.users} {...navProps} />)} />
            <Route render={() => (
                <nav className="RoomList" style={this.props.style}>
                <div className={css(styles.heading)}>
                <h2 className={css(styles.h2)}>{this.props.dms ? "Direct Messages" : "Rooms"}</h2>
                <Link
                    className={css(styles.button)}
                    to={this.props.dms ? "/rooms/newdm" : "/rooms/new"}
                >
                    <i className="fas fa-plus-circle" title="Add room"></i>
                </Link>
                </div>
                <ul className={css(styles.ul)}>
                    {Object.keys(this.props.rooms).map(roomName => <RoomLink key={roomName} room={this.props.rooms[roomName]} dms={this.props.dms} user={this.props.user} users={this.props.users} otherUser={this.props.otherUser} />)}
                </ul>
            </nav>
            )} />
        </Switch>)
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