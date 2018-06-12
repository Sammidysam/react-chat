import React from "react"

const Sidebar = ({user}) => {
    return (
        <div className="Sidebar">
            {user.userName}
        </div>
    )
}

export default Sidebar