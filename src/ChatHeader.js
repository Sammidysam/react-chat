import React, { Component } from "react"

class ChatHeader extends Component {
    render () {
        return (
            <div className="ChatHeader">
                <div className="roomInfo">
                    <h2>#{this.props.name}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default ChatHeader