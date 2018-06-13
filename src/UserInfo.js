import React from "react"

import Avatar from "./Avatar"
import SignOut from "./SignOut"

const UserInfo = ({user, style, logOut}) => {
    return (
        <div className="UserInfo" style={{...style, ...styles.userInfo}}>
            <Avatar style={styles.avatar} user={user} />
            <div className="user" style={styles.user}>{user.userName}</div>
            <SignOut logOut={logOut} />
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
    }
}

export default UserInfo