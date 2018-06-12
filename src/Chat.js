import React, { Component } from "react"

import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

class Chat extends Component {
    constructor () {
        super()

        this.state = {
            messages: [
                {
                    id: 0,
                    userName: "Sammidysam",
                    body: "My name is Sam"
                },
                {
                    id: 1,
                    userName: "cg505",
                    body: "My name is Chris"
                }
            ]
        }
    }

    render () {
        return (
            <div className="Chat">
                <ChatHeader name="general" description="Announcements and general chat" />

                <MessageList messages={this.state.messages} />

                <MessageForm />
            </div>
        )
    }
}

export default Chat