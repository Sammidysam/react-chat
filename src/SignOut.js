import React from "react"
import { StyleSheet, css } from "aphrodite"

const SignOut = ({logOut}) => {
    return (
        <button className={css(styles.button)} onClick={logOut}>
            <i className="fas fa-sign-out-alt"></i>
        </button>
    )
}

const styles = StyleSheet.create({
    button: {
        border: 0,
        padding: 0,
        color: "rgba(255, 255, 255, 0.6)",
        backgroundColor: "transparent",
        fontSize: "1.2rem",
        transition: "color 0.25s ease-out",
        cursor: "pointer",
        
        ":hover": {
            color: "white"
        }
    }
})

export default SignOut