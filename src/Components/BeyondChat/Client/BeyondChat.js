import React, { useEffect } from 'react'
import { MdOutlineSend } from "react-icons/md";
const BeyondChat = () => {
  useEffect(() => {
    new WebSocket('ws://localhost4040')
  },[])
  return (
    <div className='beyondChat'>

      <div className="leftPanel">contacts</div>
      <div className="centerPanel">
        <div>
        messages with selected person</div>
      <div className='createMsgContainer'>
          <input type="text" placeholder="Type your message here" className="messageInput" />
          <button className='sendButton'><MdOutlineSend /></button>
          </div>
</div>
    </div>
  )
}

export default BeyondChat