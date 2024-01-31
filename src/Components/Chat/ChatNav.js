import React from 'react'


const ChatNav = () => {
  return (
    <div className='chatNav'>
      <span className="logo">BeyondJobs Chat</span>
      <div className="currentUserIcon">
        <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="" />
        <span>Mark</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default ChatNav