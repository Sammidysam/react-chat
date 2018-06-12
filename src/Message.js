import React from "react"

const Message = ({message}) => {
    return (
        <div className="Message">
            {message.userName}: {message.body}
        </div>
    )    
}

export default Message