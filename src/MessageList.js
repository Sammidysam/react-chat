import React from "react"

import Message from "./Message"

const MessageList = () => {
    const messages = [
        {
            id: 0,
            userName: "Sammidysam",
            text: "My name is Sam"
        },
        {
            id: 1,
            userName: "cg505",
            text: "My name is Chris"
        }
    ]

    return (
        <div className="MessageList">
            {messages.map(message => <Message key={message.id} message={message} />)}
        </div>
    )    
}

export default MessageList