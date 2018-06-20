import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"
import Select from "react-select"

import "react-select/dist/react-select.css"

class RoomForm extends Component {
    constructor () {
        super()

        this.state = {
            room: {
                name: "",
                description: "",
                messages: [],
                public: true
            }
        }
    }

    users = () => {
      return Object.keys(this.props.users).map(uid => {
        const user = this.props.users[uid]

        return {
          value: uid,
          label: `${user.displayName} (${user.email})`
        }
      })
    }

    handleSelectChange = (selectedValue) => {
      const room = {...this.state.room}
      room.users = this.props.dms ? selectedValue.value : selectedValue.map(v => v.value)
      this.setState({ room })
    }

    handleChange = (ev) => {
        const room = {...this.state.room}
        room[ev.target.name] = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value
        this.setState({room})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()

        const room = this.state.room
        if (this.props.dms) {
          room.name = `${this.props.user.uid}${room.users}`
          room.description = `Direct message between ${this.props.user.displayName} and ${this.props.users[room.users].displayName}`
          room.users = [room.users, this.props.user.uid]
          room.dm = true
          room.public = false
        }

        this.props.addRoom(this.state.room)

        this.setState({
            room: {
                name: "",
                description: "",
                messages: []
            }
        })
        
        // This is a bit weird, as it only works because of setState being a little asynchronous.
        this.props.history.push(`/rooms/${this.state.room.name}`)
    }

    render () {
        return (
            <div className={`RoomForm ${css(styles.roomForm)}`}>
            <main className={css(styles.main)}>
              <h2 className={css(styles.title)}>Create a {this.props.dms ? "direct message" : "room"}</h2>
              <form
                className={css(styles.form)}
                onSubmit={this.handleSubmit}
              >
                {this.props.dms || (<div>
                <p>
                  <label className={css(styles.label)}>
                    <input type="checkbox" name="public" checked={this.state.room.public} onChange={this.handleChange} />
                    Public
                  </label>
                </p>
                <p>
                  <label htmlFor="name" className={css(styles.label)}>
                    Room Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.room.name}
                    className={css(styles.input)}
                    onChange={this.handleChange}
                    autoFocus
                  />
                </p>
                <p>
                  <label htmlFor="description" className={css(styles.label)}>
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={this.state.room.description}
                    className={css(styles.input)}
                    onChange={this.handleChange}
                  />
                </p></div>)}
                {(!this.state.room.public || this.props.dms) && (
                <div>
                  <label htmlFor="users" className={css(styles.label)}>{this.props.dms ? "With..." : "Users to add"}</label>
                  <Select name="users" multi={!this.props.dms} options={this.users()} value={this.state.room.users} onChange={this.handleSelectChange} />
                </div>
                )}
                <div className={css(styles.buttonContainer)}>
                  <button
                    type="button"
                    className={css(styles.button, styles.cancel)}
                    onClick={this.props.history.goBack}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={css(styles.button)}
                  >
                    Create Room
                  </button>
                </div>
              </form>
            </main>
          </div>
        )
    }
}

const styles = StyleSheet.create({
    roomForm: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      backgroundColor: "#f6f6f6",
    },
  
    title: {
      color: "#ff3344",
      fontWeight: 400,
      lineHeight: "80px",
      fontSize: "2rem",
    },
  
    main: {
      flex: 1,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "0 auto",
      paddingBottom: "3rem",
      width: "40rem",
    },
  
    form: {
      backgroundColor: "white",
      boxShadow: "0 1px 1px rgba(0,0,0,.1)",
      marginBottom: "2rem",
      paddingBottom: "2rem",
    },
  
    label: {
      display: "block",
      textTransform: "uppercase",
      color: "#999",
    },
  
    input: {
      width: "20rem",
      fontSize: "1.5rem",
      border: 0,
      borderBottom: "1px solid black",
      marginTop: "1rem",
      marginBottom: "1rem",
      textAlign: "center",
      padding: "0.5rem",
  
      ":focus": {
        outline: 0,
      },
    },
  
    h2: {
      fontWeight: "normal",
    },
  
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
    },
  
    button: {
      display: "block",
      padding: "1rem",
      margin: "0 1rem",
      fontSize: "1.2rem",
      borderRadius: "1rem",
      backgroundColor: "#ff3333",
      color: "white",
      width: "10rem",
      cursor: "pointer",
      outline: 0,
    },
  
    cancel: {
      backgroundColor: "white",
      color: "#666",
    }
})

export default RoomForm