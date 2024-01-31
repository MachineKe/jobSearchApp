import React from 'react'
import ChatSideBar from './ChatSideBar'
import Chat from './Chat'


const ChatsContainer = () => {
  return (
    <div className='chatsContainer'>
      <ChatSideBar/>
      <Chat/>
    </div>
  )
}

export default ChatsContainer