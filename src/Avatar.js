import React from "react"

const Avatar = ({style}) => {
    return (
        <div
            className="Avatar"
            style={{...style, ...styles.avatar}}
        ></div>
    )
}

const styles = {
    avatar: {
        width: "40px",
        height: "40px",
        fontSize: "1rem",
        borderRadius: "20px",
        backgroundImage: "url(https://avatars1.githubusercontent.com/u/3077078?s=400&u=241e48febff57a2d9daf4940870f1a0cc84979fc&v=4)",
        backgroundSize: "cover"
    }
}

export default Avatar