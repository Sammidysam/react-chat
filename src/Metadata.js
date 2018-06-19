import React from "react"
import Moment from "moment"

const Metadata = ({message}) => {
    Moment.locale("en")

    return (
        <div className="Metadata" style={styles.metadata}>
            <div className="user" style={styles.user}>{message.user.displayName}</div>
            <div className="time" style={styles.time}>{Moment(message.createdAt).format("h:mm a")}</div>
      </div>
    )
}

const styles = {
    metadata: {
        display: "flex",
        alignItems: "baseline"
    },
    user: {
        fontWeight: "bold",
        marginRight: "0.5rem"
    },
    time: {
        color: "#999",
        fontSize: "0.9rem"
    }
}

export default Metadata