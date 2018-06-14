import React from "react"
import { StyleSheet, css } from "aphrodite"

import RoomLink from "./RoomLink"

const RoomList = ({style, rooms, changeRoom, addRoom}) => {
    return (
        <nav className="RoomList" style={style}>
            <div className={css(styles.heading)}>
            <h2 className={css(styles.h2)}>Rooms</h2>
            <button
                className={css(styles.button)}
                onClick={() => addRoom({ name: "fancy", description: "for fancy talk" })}
            >
                <i className="fas fa-plus-circle" title="Add room"></i>
            </button>
            </div>
            <ul className={css(styles.ul)}>
                {Object.keys(rooms).map(roomName => <RoomLink key={roomName} room={rooms[roomName]} changeRoom={changeRoom} />)}
            </ul>
        </nav>
    )
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