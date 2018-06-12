import React from "react"

import Message from "./Message"

const MessageList = ({messages}) => {
    return (
        <div className="MessageList" style={styles.messageList}>
            <div class="roomAnnouncement" style={styles.roomAnnouncement}>
                <h3 style={styles.h3}>#general</h3>
                <p>This is the very beginning of the #general room.</p>
            </div>

            {messages.map(message => <Message key={message.id} message={message} />)}
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