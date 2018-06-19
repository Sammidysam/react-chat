import React from "react"

const ChatHeader = ({room, removeRoom}) => {
    return (
        <div className="ChatHeader" style={styles.chatHeader}>
            <div className="roomInfo">
                <h2 style={styles.roomH2}>#{room.name}</h2>
                <p style={styles.roomP}>{room.description}</p>
            </div>
            <button style={styles.button} onClick={() => removeRoom(room)}>
                <i className="far fa-trash-alt"></i>
            </button>
        </div>
    )    
}

const styles = {
    chatHeader: {
        backgroundColor: "#f3f3f3",
        borderBottom: "1px solid #ccc",
        height: "3rem",
        padding: "0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    roomH2: {
        fontSize: "1.1rem",
        margin: 0
    },
    roomP: {
        color: "#999",
        margin: 0,
        fontSize: "0.8rem"
    },
    button: {
        border: 0,
        outline: 0,
        padding: 0,
        backgroundColor: "transparent",
        cursor: "pointer",
        color: "rgba(0,0,0,0.4)",
        fontSize: "1rem"
    }
}

export default ChatHeader