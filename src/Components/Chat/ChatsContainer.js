import React from 'react'
import ChatSideBar from './ChatSideBar'
import Chat from './Chat'


const ChatsContainer = () => {
  return (
    <div className='chatsContainer'>
      <div className="innerChatsContainer">
     <div className="chatSideBarContainer">
      <ChatSideBar />
      </div>
      <div className="individualChatContainer">
      <Chat />
      </div>
      </div>
    </div>
  )
}

export default ChatsContainer