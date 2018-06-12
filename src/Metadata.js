import React from "react"
import Moment from "moment"

const Metadata = ({message}) => {
    Moment.locale("en")

    return (
        <div class="Metadata" style={styles.metadata}>
            <div class="user" style={styles.user}>{message.user.userName}</div>
            <div class="time" style={styles.time}>{Moment(message.time).format("h:mm a")}</div>
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