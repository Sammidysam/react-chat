import React, { Component } from "react"

import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

class Chat extends Component {
    render () {
        if (this.props.room) {
            return (
                <div className="Chat" style={styles.chat}>
                    <ChatHeader room={this.props.room} />,

                    <MessageList room={this.props.room} />,

                    <MessageForm submit={this.props.addMessage} />
                </div>
            )
        } else {
            return (
                <div className="Chat" style={styles.chat}>
                    <p>No rooms yet.</p>
                </div>
            )
        }
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