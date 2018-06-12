import React from "react"

const ChatHeader = ({name, description}) => {
    return (
        <div className="ChatHeader">
            <div className="roomInfo">
                <h2>#{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )    
}

export default ChatHeader