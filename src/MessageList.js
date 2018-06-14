import React from "react"

import Message from "./Message"

const MessageList = ({room}) => {
    return (
        <div className="MessageList" style={styles.messageList}>
            <div className="roomAnnouncement" style={styles.roomAnnouncement}>
                <h3 style={styles.h3}>#{room.name}</h3>
                <p>This is the very beginning of the #{room.name} room.</p>
            </div>

            {room.messages && room.messages.map(message => <Message key={message.id} message={message} />)}
        </div>
    )    
}

const styles = {
    messageList: {
        backgroundColor: "white",
        flex: 1,
        paddingBottom: "1rem",
        overflowY: "scroll"
    },
    roomAnnouncement: {
        padding: "2rem 1rem"
    },
    h3: {
        fontSize: "1.5rem"
    }
}

export default MessageList