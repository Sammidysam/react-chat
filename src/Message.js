import React from "react"

const Message = ({message}) => {
    return (
        <div className="Message">
            {message.user.userName}: {message.body}
        </div>
    )    
}

export default Message