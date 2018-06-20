import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"
import { NavLink } from "react-router-dom"

class RoomLink extends Component {
    otherUser = () => {
        const user = this.props.users[this.props.room.users.filter(u => u !== this.props.user.uid)[0]]
        return user && user.displayName
    }

    render () {
        return (
            <li className={css(styles.li)}><NavLink to={`/rooms/${this.props.room.name}`} className={this.props.dms ? `${css(styles.lia)}` : `${css(styles.lia)} ${css(styles.before)}`}>{this.props.dms ? this.otherUser() : this.props.room.name}</NavLink></li>
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