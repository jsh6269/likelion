export const ChatElementLastMessage = ({ message }) => {
  return (
    <div className="w-[288px] flex items-start">
      <p className="text-neutral-700 font-pretendard text-[16px] font-normal leading-[24px]">
        {message}
      </p>
    </div>
  );
};
