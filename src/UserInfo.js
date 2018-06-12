import React from "react"

import Avatar from "./Avatar"

const UserInfo = ({user, style}) => {
    return (
        <div className="UserInfo" style={{...style, ...styles.userInfo}}>
            <Avatar style={styles.avatar} />
            <div className="user" style={styles.user}>{user.userName}</div>
            <a href="#" style={styles.a}>
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    )
}

const styles = {
    userInfo: {
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center"
    },
    avatar: {
        marginRight: "0.5rem"
    },
    user: {
        flex: 1
    },
    a: {
        border: 0,
        padding: 0,
        backgroundColor: "transparent",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "1.2rem",
        transition: "color 0.25s ease-out"
    }
    // a:hover missing! (put in index.css)
}

export default UserInfo