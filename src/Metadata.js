import React from "react"

const Metadata = () => {
    return (
        <div class="Metadata" style={styles.metadata}>
            <div class="user" style={styles.user}>Davey</div>
            <div class="time" style={styles.time}>1:10 PM</div>
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