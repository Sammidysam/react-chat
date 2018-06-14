import React from "react"
import { StyleSheet, css } from "aphrodite"

import RoomLink from "./RoomLink"

const RoomList = ({style, rooms, changeRoom}) => {
    return (
        <nav className="RoomList" style={style}>
            <h2 className={css(styles.h2)}>Rooms</h2>
            <ul className={css(styles.ul)}>
                {Object.keys(rooms).map(roomName => <RoomLink key={roomName} room={rooms[roomName]} changeRoom={changeRoom} />)}
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
    }
})

export default RoomList