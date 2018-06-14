import React, { Component } from "react"

class RoomForm extends Component {
    constructor () {
        super()

        this.state = {
            room: {
                name: "",
                description: "",
                messages: []
            }
        }
    }

    handleChange = (ev) => {
        const room = {...this.state.room}
        room[ev.target.name] = ev.target.value
        this.setState({room})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addRoom(this.state.room)
        this.props.hideRoomForm()
    }

    render () {
        return (
          <div className="RoomForm">
            <form onSubmit={this.handleSubmit}>
              <p>
                <label htmlFor="name">Room name</label>
                <input type="text" name="name" value={this.state.room.name} onChange={this.handleChange} autoFocus />
              </p>
              <p>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={this.state.room.description} onChange={this.handleChange} />
              </p>
              <div>
                <button
                  type="button"
                  onClick={this.props.hideRoomForm}
                >
                  Cancel
                </button>
                <button type="submit">
                  Create Room
                </button>
              </div>
            </form>
          </div>
        )
    }
}

export default RoomForm