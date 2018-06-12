import React from "react"

const Avatar = ({style, user}) => {
    return (
        <div
            className="Avatar"
            style={{...style, ...styles.avatar, backgroundImage: user.avatar}}
        ></div>
    )
}

const styles = {
    avatar: {
        width: "40px",
        height: "40px",
        fontSize: "1rem",
        borderRadius: "20px",
        backgroundSize: "cover"
    }
}

export default Avatar