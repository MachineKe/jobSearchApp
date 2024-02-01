import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "de671d51-d061-45bf-afc2-3cba8b397a4b",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "90vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "90vh" }} />
    </div>
  );
};

export default ChatsPage;
