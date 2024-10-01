import { createContext, useContext } from 'react';
import useChatWebSocket from '../hooks/use-chat-web-socket';
const ChatWebSocketContext = createContext(null);

export const ChatWebSocketProvider = ({ children }) => {
  const socket = useChatWebSocket();
  return (
    <ChatWebSocketContext.Provider value={socket}>
      {children}
    </ChatWebSocketContext.Provider>
  );
};

export const useChatWebSocketContext = () => {
  return useContext(ChatWebSocketContext);
};
