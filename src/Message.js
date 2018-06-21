import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"
import { Picker, Emoji } from "emoji-mart"

import Avatar from "./Avatar"
import Metadata from "./Metadata"

import "emoji-mart/css/emoji-mart.css"

class Message extends Component {
    constructor () {
        super()

        this.state = {
            showPicker: false
        }
    }

    togglePicker = () => {
        this.setState({ showPicker: !this.state.showPicker })
    }

    handleSelect = e => {
        this.props.addReaction(this.props.message, e.colons)
        this.togglePicker()
    }

    displayEmoji = (reaction) => {
        return (
            <button key={reaction} className="emoji" onClick={() => this.props.addReaction(this.props.message, reaction)}>
                <span><Emoji emoji={reaction} size={16} /></span>
                <span>{this.props.message.reactions[reaction].length}</span>
            </button>
        )
    }

    render () {
        return (
            <div className={`Message ${css(styles.message)}`}>
                <Avatar user={this.props.message.user} />
                <div className={`${css(styles.details)}`}>
                    <Metadata message={this.props.message} />
                    <div className="body">
                    {this.props.message.body}
                    </div>
                    <button className={`reactionButton ${css(styles.reactionButton)}`} onClick={this.togglePicker}>
                        <i className="far fa-smile"></i>
                    </button>
                    <div className={css(styles.emojiBox)}>
                        {this.props.message.reactions && Object.keys(this.props.message.reactions).map(r => this.displayEmoji(r))}
                    </div>
                </div>
                {this.state.showPicker && <Picker showPreview={false} style={pickerStyles} onSelect={this.handleSelect} />}
            </div>
        )
    }
}

const styles = StyleSheet.create({
    message: {
        display: "flex",
        marginTop: "1rem",
        padding: "0.2rem 1rem",
        position: "relative",

        ":hover": {
            backgroundColor: "#f6f6f6"
        }
    },
    details: {
        flex: 1,
        paddingLeft: "0.5rem"
    },
    reactionButton: {
        cursor: "pointer",
        border: 0,
        outline: 0,
        backgroundColor: "transparent",
        padding: 0,
        color: "#ccc",
        fontSize: "1rem",
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",

        ":hover": {
            color: "blue"
        }
    },
    emojiBox: {
        display: "flex",
        justifyContent: "flex-start"
    },
    emoji: {
        verticalAlign: "bottom"
    }
})

const pickerStyles = {
    position: "absolute",
    top: "-20rem",
    right: "2rem"
}

export default Message