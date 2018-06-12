import React, { Component } from "react"

import ChatHeader from "./ChatHeader"

class Chat extends Component {
    render () {
        return (
            <div className="Chat">
                <ChatHeader name="general" description="Announcements and general chat" />
            </div>
        )
    }
}

export default Chat