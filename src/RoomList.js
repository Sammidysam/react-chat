import React from "react"
import { StyleSheet, css } from "aphrodite"

const RoomList = ({style, rooms, changeRoom}) => {
    return (
        <nav className="RoomList" style={style}>
            <h2 className={css(styles.h2)}>Rooms</h2>
            <ul className={css(styles.ul)}>
                {rooms.map(room => <li key={room.id} className={css(styles.li)}><a className={css(styles.lia)} onClick={() => changeRoom(room)}>{room.name}</a></li>)}
            </ul>
        </nav>
    )
}

const styles = StyleSheet.create({
    h2: {
        fontSize: "1rem"
    },
    ul: {
        listStyle: "none",
        marginLeft: 0,
        paddingLeft: 0
    },
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

export default RoomList