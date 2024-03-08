import React, { useEffect, useState } from 'react';
import { MdOutlineSend } from 'react-icons/md';

const BeyondChat = () => {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:4040');

    newWs.addEventListener('message', handleMessage);

    setWs(newWs);

    // Clean-up function to close WebSocket connection when component unmounts
    return () => {
      newWs.removeEventListener('message', handleMessage);
      newWs.close();
    };
  }, []);

  function handleMessage(e) {
    console.log('new message', e);
  }

  return (
    <div className='beyondChat'>
      <div className="leftPanel">contacts</div>
      <div className="centerPanel">
        <div>messages with selected person</div>
        <div className='createMsgContainer'>
          <input type="text" placeholder="Type your message here" className="messageInput" />
          <button className='sendButton'><MdOutlineSend /></button>
        </div>
      </div>
    </div>
  );
};

export default BeyondChat;
