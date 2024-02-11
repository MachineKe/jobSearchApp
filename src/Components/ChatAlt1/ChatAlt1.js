import { useState, useContext } from "react";

import "./ChatAlt1.css"
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import { AuthContext } from "../Posting/Client/Context/auth";
import PostLogin from '../Posting/Client/PostLogin'
function ChatAlt1() {
const user = useContext(AuthContext)

  // const [user, setUser] = useState(undefined);

  if (!user) {
    return <PostLogin/>;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default ChatAlt1;
