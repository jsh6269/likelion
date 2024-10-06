import { useChatWebSocketContext } from '../contexts/chat-websocket-context';
import { ChatList } from './chat-list';
import { ChatRoom } from './chat-room';

export const ChatSection = () => {
  const { chatRoomId } = useChatWebSocketContext();
  return (
    <>
      <ChatList />
      {chatRoomId && <ChatRoom chatRoomId={chatRoomId} />}
    </>
  );
};
