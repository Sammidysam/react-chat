import React, { Component } from "react"
import Moment from "moment"

class Metadata extends Component {
    formatCreatedAt (time) {
        const moment = Moment(this.props.message.createdAt)

        if (new Date(time).getDate() === new Date(Date.now()).getDate())
            return moment.format("h:mm a")
        else
            return moment.format("D MMM @ h:mm a")
    }

    render () {
        Moment.locale("en")

        return (
            <div className="Metadata" style={styles.metadata}>
                <div className="user" style={styles.user}>{this.props.message.user.displayName}</div>
                <div className="time" style={styles.time}>{this.formatCreatedAt(this.props.message.createdAt)}</div>
        </div>
        )
    }
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