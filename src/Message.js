import React from "react"

const Message = ({message}) => {
    return (
        <div className="Message">
            {message.userName}: {message.text}
        </div>
    )    
}

export default Message