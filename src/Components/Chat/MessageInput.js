import React from 'react'
import { IoIosAttach } from "react-icons/io";
import { AiTwotonePicture } from "react-icons/ai";
const MessageInput = () => {
  return (
    <div className='messageInput'>
      <input type="text" placeholder='type here...' />
      <div className="sendMessage">
<IoIosAttach className='inputIcon'/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
<AiTwotonePicture className='inputIcon'/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default MessageInput