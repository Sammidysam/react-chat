import React from "react"

const RoomList = ({style}) => {
    return (
        <nav className="RoomList" style={style}>
            <h2 style={styles.h2}>Rooms</h2>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="#" style={styles.lia}>general</a></li>
                <li style={styles.li}><a href="#" style={styles.lia}>random</a></li>
            </ul>
        </nav>
    )
}

const styles = {
    h2: {
        fontSize: "1rem"
    },
    ul: {
        listStyle: "none",
        marginLeft: 0,
        paddingLeft: 0
    },
    li: {
        marginBottom: "0.5rem"
    },
    lia: {
        display: "block",
        color: "whitesmoke",
        textDecoration: "none"
    }
    // missing a lia before and lia hover (they are in index.css)
}

export default RoomList