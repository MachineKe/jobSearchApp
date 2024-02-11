import { useState } from "react";

import "./ChatAlt1.css"
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function ChatAlt1() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default ChatAlt1;
