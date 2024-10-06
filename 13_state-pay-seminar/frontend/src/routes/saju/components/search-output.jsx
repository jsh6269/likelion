const SajuSearchOutput = ({ outputs }) => {
  const { name, headline, content } = outputs;

  return (
    <div className="w-full h-full flex flex-col justify-start items-center text-justify gap-[30px] py-[70px] px-20">
      <div className=" w-full text-neutral-800 text-[36px] font-extrabold nanum-extra-bold  pb-2 border-b border-neutral-500">
        <span className="text-[#4a3aff]">{name}</span>님의 오늘 운세
      </div>
      <div className="text-[26px] font-semibold">{headline}</div>
      <div className="text-[22px] font-normal leading-[44px] font-PretendardRegular">
        {content}
      </div>
    </div>
  );
};

export default SajuSearchOutput;
