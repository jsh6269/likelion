export const ReceiveSpeechBubble = ({ text }) => {
  return (
    <div className="flex max-w-[480px] px-[16px] py-[12px] justify-center items-center gap-[8px] rounded-[24px_16px_16px_4px] bg-[#E3E5F2]">
      <p className="text-neutral-800 font-pretendard text-[18px] font-semibold leading-[27px]">
        {text}
      </p>
    </div>
  );
};
