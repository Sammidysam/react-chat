import React from "react"
import { StyleSheet, css } from "aphrodite"
import { NavLink } from "react-router-dom"

const RoomLink = ({room}) => {
    return (
        <li className={css(styles.li)}><NavLink to={`/rooms/${room.name}`} className={css(styles.lia)}>{room.name}</NavLink></li>
    )
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

        "::before": {
            content: '"# "'
        },

        ":hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)"
        }
    }
})

export default RoomLink