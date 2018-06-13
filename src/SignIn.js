import React, { Component } from "react"

class SignIn extends Component {
    constructor () {
        super()

        this.state = {
            email: "",
            name: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.submit(this.state.email, this.state.name, this.state.password)
        this.setState({
            email: "",
            name: "",
            password: ""
        })
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    render () {
        return (
            <form className="SignIn" onSubmit={this.handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                <button type="submit">
                    <i className="fas fa-check"></i>
                </button>
            </form>
        )
    }
}

export default SignIn