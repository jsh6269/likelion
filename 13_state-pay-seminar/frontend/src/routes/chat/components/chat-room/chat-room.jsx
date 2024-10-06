import { ChatRoomBody } from './chat-room-body';
import { ChatRoomFooter } from './chat-room-footer';
import { ChatRoomHeader } from './chat-room-header';

export const ChatRoom = () => (
  <div className="flex flex-1 flex-col h-[calc(100vh-80px)] overflow-y-auto animate-fadeIn">
    <ChatRoomHeader />
    <ChatRoomBody />
    <ChatRoomFooter />
  </div>
);
