import React from "react"

const MessageForm = ({submit}) => {
    return (
        <form className="messageForm" onSubmit={submit}>
            <input type="text" name="body" placeholder="Type a message..." />
            <button type="submit">Send</button>
        </form>
    )
}

export default MessageForm