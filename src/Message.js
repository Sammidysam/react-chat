import React from "react"

import Avatar from "./Avatar"
import Metadata from "./Metadata"

const Message = ({message}) => {
    return (
        <div class="Message">
          <Avatar />
          <div class="details">
            <Metadata />
            <div class="body">
              {message.body}
            </div>
          </div>
        </div>
    )    
}

export default Message