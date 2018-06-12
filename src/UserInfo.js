import React from "react"

const UserInfo = ({user, style}) => {
    return (
        <div className="UserInfo" style={{...style, ...styles.userInfo}}>
            <div
                className="Avatar"
                style={styles.avatar}
            ></div>
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
        marginRight: "0.5rem",
        width: "40px",
        height: "40px",
        fontSize: "1rem",
        borderRadius: "20px",
        backgroundImage: "url(https://avatars1.githubusercontent.com/u/3077078?s=400&u=241e48febff57a2d9daf4940870f1a0cc84979fc&v=4)",
        backgroundSize: "cover"
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