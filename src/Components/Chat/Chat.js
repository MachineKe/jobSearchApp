import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const Chat = () => {
  return (
    <div className="chatBox">
      <div className="chatBoxInfo">
        <span>Jane</span>
        <div className="chatBoxIcon">
          <FaVideo />
          <IoIosPersonAdd />
          <SlOptionsVertical />
        </div>
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default Chat;
