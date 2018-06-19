import React from "react"

const Avatar = ({style, user}) => {
    const photoURL = user.photoURL || `https://api.adorable.io/avatars/40/${user.email}.png`

    return (
        <div
            className="Avatar"
            style={{...style, ...styles.avatar, backgroundImage: `url(${photoURL}`}}
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