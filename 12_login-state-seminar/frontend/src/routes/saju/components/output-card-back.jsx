export const OutputCardBack = ({ data, isUnlocked }) => {
  return (
    <div
      className="absolute flex flex-col w-[500px] h-[370px] p-[45px] bg-white text-neutral-800 text-left gap-[20px] rounded-[12px] shadow-[0px_5px_16px_0px_rgba(8,15,52,0.06)]"
      style={{
        backfaceVisibility: isUnlocked ? 'hidden' : 'visible',
        transform: isUnlocked ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}
    >
      <h1 className="text-[28px] font-extrabold nanum-extra-bold">
        {data.title}
      </h1>
      {isUnlocked ? (
        <p className="text-[20px] leading-[180%] font-PretendardRegular">
          {data.msg}
        </p>
      ) : (
        <div className="bg-white opacity-30 blur-sm">
          <p className="text-[20px] leading-[180%] font-PretendardRegular">
            {data.msg}
          </p>
        </div>
      )}
    </div>
  );
};
