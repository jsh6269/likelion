import { ProfileImage } from '../../../../../components/profile-image';
import { ChatElementLastMessage } from './chat-element-last-message';
import { ChatElementUsername } from './chat-element-username';
import { useChatWebSocketContext } from 'routes/chat/contexts/chat-websocket-context';

export const ChatElement = ({
  chatRoomId,
  nickname,
  profileImageId,
  lastMessage,
}) => {
  const { setChatRoomId } = useChatWebSocketContext();
  return (
    <div
      className="flex px-4 py-3 items-center gap-4 self-stretch bg-Neutral-100"
      onClick={() => setChatRoomId(chatRoomId)}
    >
      <ProfileImage profileImageId={profileImageId} />
      <div className="flex flex-col items-start gap-1 flex-1">
        <ChatElementUsername username={nickname} />
        <ChatElementLastMessage message={lastMessage} />
      </div>
    </div >
  );
};
