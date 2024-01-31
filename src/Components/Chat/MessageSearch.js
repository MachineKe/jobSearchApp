import React from "react";

const MessageSearch = () => {
  return <div>
    <div className="msgSearchContainer">
    <div className="msgSearchForm">
      <input type="text" placeholder="Find a user"/>
    </div>
    <div className="singleMessage">
      <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" />
      <div className="singleMessageInfo">
        <span>Jane</span>
      </div>
    </div>
  </div>
  </div>
}

export default MessageSearch;
