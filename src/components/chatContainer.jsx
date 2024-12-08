import ChatDisplay from "./chatDisplay.jsx";
import ChatHeader from "./ChatHeader.jsx";
import MatchesDisplay from "./matchesDisplay.jsx";

const ChatContainer = () => {
  return (
    <div className="chat-container">
      <ChatHeader />
      
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>

      <MatchesDisplay />

      <ChatDisplay />
    </div>
  );
};
export default ChatContainer;
