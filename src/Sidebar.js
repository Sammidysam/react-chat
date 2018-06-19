import React from "react"

import RoomList from "./RoomList"
import UserInfo from "./UserInfo"

const Sidebar = ({user, users, organization, rooms, logOut, addRoom}) => {
    return (
        <aside className="Sidebar" style={styles.sidebar}>
            <UserInfo style={styles.children} user={user} logOut={logOut}x />
            <h1 style={{...styles.children, ...styles.h1}}>{organization}</h1>
            <RoomList style={styles.children} rooms={rooms} users={users} addRoom={addRoom} />
        </aside>
    )
}

const styles = {
    sidebar: {
        backgroundColor: "#333344",
        color: "rgba(255, 255, 255, 0.8)",
        width: "12rem",
        padding: "1rem 0",
        display: "flex",
        flexDirection: "column"
    },
    children: {
        padding: "0 1rem"
    },
    h1: {
        color: "white",
        fontSize: "1.2rem",
        marginTop: 0
    }
}

export default Sidebar