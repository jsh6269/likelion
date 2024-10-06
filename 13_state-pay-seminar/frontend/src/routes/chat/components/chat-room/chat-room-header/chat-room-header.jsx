import { ArrowIcon } from './arrow-icon';
import { useChatWebSocketContext } from 'routes/chat/contexts/chat-websocket-context';
import { ProfileImage } from '../../../../../components/profile-image';

const UsernameStyledText = ({ username }) => (
  <div className="text-[var(--Neutral-800,#170F49)] font-pretendard text-[20px] font-semibold leading-[30px]">
    {username}
  </div>
);

export const ChatRoomHeader = () => {
  const { chatRoomId, setChatRoomId, chatRoomList } = useChatWebSocketContext();

  const selectedChatRoom = chatRoomList.filter(
    (room) => room.id === chatRoomId,
  )[0];
  const representativeParticipant = selectedChatRoom.participants[0];

  return (
    <div className="flex flex-row h-[92px] w-full px-[25px] py-[14px] gap-4 items-center bg-[var(--background,#FFFFFF)]">
      <button
        onClick={() => {
          setChatRoomId(null);
        }}
      >
        <ArrowIcon />
      </button>
      <ProfileImage
        profileImageId={parseInt(
          representativeParticipant.profile.profilepic_id,
        )}
      />
      <UsernameStyledText
        username={representativeParticipant.profile.nickname}
      />
    </div>
  );
};
