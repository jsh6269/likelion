import { ChatSection } from '../components'
import { ChatWebSocketProvider } from '../contexts/chat-websocket-context';
const ChatPage = () => {
  return (
    <div className="flex flex-row flex-1 justify-start bg-[var(--background,#F7F7FB)]">
      <ChatWebSocketProvider>
        <ChatSection />
      </ChatWebSocketProvider>
    </div>
  );
};

export default ChatPage;
