import React from "react"
import { StyleSheet, css } from "aphrodite"

const RoomLink = ({room, changeRoom}) => {
    return (
        <li key={room.name} className={css(styles.li)}><a className={css(styles.lia)} onClick={() => changeRoom(room)}>{room.name}</a></li>
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