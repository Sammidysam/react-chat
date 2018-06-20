import React from "react"
import { StyleSheet, css } from "aphrodite"

import Avatar from "./Avatar"
import Metadata from "./Metadata"

const Message = ({message}) => {
    return (
        <div className={`Message ${css(styles.message)}`}>
          <Avatar user={message.user} />
          <div className={`${css(styles.details)}`}>
            <Metadata message={message} />
            <div className="body">
              {message.body}
            </div>
            <button className={`reactionButton ${css(styles.reactionButton)}`}>
                <i className="far fa-smile"></i>
            </button>
          </div>
        </div>
    )    
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
    }
})

export default Message