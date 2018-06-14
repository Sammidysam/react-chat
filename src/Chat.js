import React, { Component } from "react"

import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

class Chat extends Component {
    inRoom = () => {
        return (
            <div>
                <ChatHeader room={this.props.room} />

                <MessageList room={this.props.room} />

                <MessageForm submit={this.props.addMessage} />
            </div>
        )
    }

    render () {
        const template = this.props.room ? this.inRoom() : <p>No rooms yet.</p>

        return (
            <div className="Chat" style={styles.chat}>
                {template}
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