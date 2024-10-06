import { SendIcon } from '../send-icon';

export const ChatRoomFooter = () => {
  return (
    <div className="flex flex-row h-[92px] w-full px-[25px] py-[14px] gap-4 items-center bg-[var(--background,#FFFFFF)]">
      <div className="flex items-center w-full h-[50px] border border-[#E3E5F2] bg-[#FFF] rounded-lg px-[12px] py-[12px] gap-[16px]">
        <input
          type="text"
          placeholder="메시지를 입력하세요."
          className="flex-1 h-full px-2 py-1 border-none bg-transparent outline-none"
        />
        <button
          className="flex-shrink-0 p-2 rounded-lg hover:bg-[#F7F7FB]"
          onClick={() => alert('클릭')}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
