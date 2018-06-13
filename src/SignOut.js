import React from "react"

const SignOut = ({logOut}) => {
    return (
        <a style={styles.a} onClick={logOut}>
            <i className="fas fa-sign-out-alt"></i>
        </a>
    )
}

const styles = {
    a: {
        border: 0,
        padding: 0,
        backgroundColor: "transparent",
        fontSize: "1.2rem",
        transition: "color 0.25s ease-out"
    }
    // a:hover missing! (put in index.css)
}

export default SignOut