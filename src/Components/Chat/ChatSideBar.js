import React from "react";
import ChatNav from "./ChatNav";
import MessageSearch from "./MessageSearch";
import Chats from "./Chats";

const ChatSideBar = () => {
  return (
    <div className="chatSideBar">
      <ChatNav />
      <MessageSearch />
      <Chats/>
    </div>
  );
};

export default ChatSideBar;
