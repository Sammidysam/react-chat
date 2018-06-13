import React, { Component } from "react"

class LogIn extends Component {
    constructor () {
        super()

        this.state = {
            name: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.submit(this.state.name, this.state.password)
        this.setState({
            name: "",
            password: ""
        })
    }

    handleUsernameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    render () {
        return (
            <form className="LogIn" onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
                <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                <button type="submit">
                    <i class="fas fa-check"></i>
                </button>
            </form>
        )
    }
}

export default LogIn