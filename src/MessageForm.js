import React, { Component } from "react"

class MessageForm extends Component {
    constructor () {
        super()

        this.state = {
            body: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.submit(this.state.body)
        this.setState({ body: "" })
    }

    handleChange = (event) => {
        this.setState({ body: event.target.value })
    }

    render () {
        return (
            <form className="messageForm" onSubmit={this.handleSubmit}>
                <input type="text" name="body" placeholder="Type a message..." value={this.state.body} onChange={this.handleChange} />
                <button type="submit">Send</button>
            </form>
        )
    }
}

export default MessageForm