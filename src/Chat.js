import React, { Component } from "react"

import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

import base from "./base"

class Chat extends Component {
    constructor () {
        super()

        this.state = {
            messages: []
        }
    }

    componentWillMount () {
        base.syncState(`${this.props.room.name}/messages`, {
            context: this,
            state: "messages",
            asArray: true
        })
    }

    shouldComponentUpdate (nextProps, nextState) {
        base.reset()
        base.syncState(`${nextProps.room.name}/messages`, {
            context: this,
            state: "messages",
            asArray: true
        })

        return true
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({id: messages.length, user: this.props.user, body: body, time: Date.now()})
        this.setState({messages})
    }

    render () {
        return (
            <div className="Chat" style={styles.chat}>
                <ChatHeader room={this.props.room} />

                <MessageList messages={this.state.messages} room={this.props.room} />

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