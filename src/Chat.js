import React, { Component } from "react"

import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

class Chat extends Component {
    constructor () {
        super()

        this.state = {
            messages: []
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({id: Date.now, user: this.props.user, body: body})
        this.setState({messages})
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