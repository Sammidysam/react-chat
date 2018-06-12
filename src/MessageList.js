import React from "react"

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
            {messages.map(message => <div key={message.id}>{message.userName}: {message.text}</div>)}
        </div>
    )    
}

export default MessageList