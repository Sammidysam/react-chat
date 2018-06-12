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

    addMessage = (event) => {
        event.preventDefault()

        const form = event.target

        const messages = [...this.state.messages]
        messages.push({id: Date.now, userName: "rye", body: form.body.value})
        this.setState({messages})

        form.reset()
        form.body.focus()
    }

    render () {
        return (
            <div className="Chat">
                <ChatHeader name="general" description="Announcements and general chat" />

                <MessageList messages={this.state.messages} />

                <MessageForm submit={this.addMessage} />
            </div>
        )
    }
}

export default Chat