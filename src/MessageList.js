import React, { Component } from "react"

import Message from "./Message"

class MessageList extends Component {
    componentDidMount () {
        this.scrollToBottom()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.room.messages && this.props.room.messages && prevProps.room.messages.length < this.props.room.messages.length) {
            this.scrollToBottom()
        }
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({
            behavior: "smooth"
        })
    }

    render () {
        return (
            <div className="MessageList" style={styles.messageList}>
                <div className="roomAnnouncement" style={styles.roomAnnouncement}>
                    <h3 style={styles.h3}>{this.props.room.dm ? this.props.otherUser() : "#" + this.props.room.name}</h3>
                    <p>This is the very beginning of the {this.props.room.dm ? "direct message with " + this.props.otherUser() : "#" + this.props.room.name + " room"}.</p>
                </div>

                {this.props.room.messages && this.props.room.messages.map(message => <Message key={message.id} message={message} />)}
                <div className="end" ref={el => this.messagesEnd = el}></div>
            </div>
        )
    }
}

const styles = {
    messageList: {
        backgroundColor: "white",
        flex: 1,
        paddingBottom: "1rem",
        overflowY: "scroll"
    },
    roomAnnouncement: {
        padding: "2rem 1rem"
    },
    h3: {
        fontSize: "1.5rem"
    }
}

export default MessageList