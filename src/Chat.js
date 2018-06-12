import React, { Component } from "react"

import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

class Chat extends Component {
    constructor () {
        super()

        this.state = {
            messageKey: 0,
            messages: []
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({id: this.state.messageKey, user: this.props.user, body: body})
        this.setState({messageKey: this.state.messageKey + 1, messages})
    }

    render () {
        return (
            <div className="Chat" style={styles.chat}>
                <ChatHeader room={this.props.room} />

                <MessageList messages={this.state.messages} />

                <MessageForm submit={this.addMessage} />
            </div>
        )
    }
}

const styles = {
    chat: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
    }
}

export default Chat