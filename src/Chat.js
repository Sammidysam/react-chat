import React, { Component } from "react"

import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

class Chat extends Component {
    inRoom = () => {
        return [<ChatHeader room={this.props.room} />,

                <MessageList room={this.props.room} />,

                <MessageForm submit={this.props.addMessage} />]
    }

    outOfRoom = () => {
        return [<p>No rooms yet.</p>]
    }

    render () {
        const templates = this.props.room ? this.inRoom() : this.outOfRoom()

        return (
            <div className="Chat" style={styles.chat}>
                {templates}
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