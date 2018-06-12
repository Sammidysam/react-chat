import React from "react"

import RoomList from "./RoomList"

// Avatar missing background image!
const Sidebar = ({user}) => {
    return (
        <aside className="Sidebar" style={styles.sidebar}>
            <div className="UserInfo" style={styles.children}>
                <div
                    className="Avatar"
                ></div>
                <div className="user">{user.userName}</div>
                <a href="#">
                    <i className="fas fa-sign-out-alt"></i>
                </a>
            </div>
            <h1 style={{...styles.children, ...styles.h1}}>XTBC 18</h1>
            <RoomList style={styles.children} />
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