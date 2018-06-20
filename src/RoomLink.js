import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"
import { NavLink } from "react-router-dom"

class RoomLink extends Component {
    render () {
        return (
            <li className={css(styles.li)}><NavLink to={`/rooms/${this.props.room.name}`} className={this.props.dms ? `${css(styles.lia)}` : `${css(styles.lia)} ${css(styles.before)}`}>{this.props.dms ? this.props.otherUser(this.props.room) : this.props.room.name}</NavLink></li>
        )
    }
}

const styles = StyleSheet.create({
    li: {
        marginBottom: "0.5rem"
    },
    lia: {
        display: "block",
        color: "whitesmoke",
        textDecoration: "none",
        cursor: "pointer",

        ":hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)"
        }
    },
    before: {
        "::before": {
            content: '"# "'
        }
    }
})

export default RoomLink