import { useState } from 'react';

export const OutputCardFront = ({ data }) => {
  console.log(data);
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <div className="absolute [backface-visibility:hidden] flex flex-col w-[500px] h-[370px] p-[20px] justify-center items-center bg-white text-neutral-800 rounded-[12px] shadow-[0px_5px_16px_0px_rgba(8,15,52,0.06)] transition-shadow duration-300 hover:[box-shadow:0px_0px_50px_0px_rgba(136,73,0,0.30)]">
    <div
      className="absolute [backface-visibility:hidden] flex flex-col w-[500px] h-[370px] p-[20px] justify-center items-center bg-white text-neutral-800 rounded-[12px] transition-shadow duration-300 shadow-[0px_5px_16px_0px_rgba(8,15,52,0.06)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered && `0px 0px 50px 0px ${data.shadow}`,
      }}
    >
      <div className="flex flex-col gap-[50px]">
        <img
          src={data.image}
          alt="output-card-front"
          className="w-[180px] h-[180px]"
        />
        <h1 className="text-[28px] font-extrabold leading-[28px] nanum-extra-bold">
          {data.title}
        </h1>
      </div>
    </div>
  );
};
