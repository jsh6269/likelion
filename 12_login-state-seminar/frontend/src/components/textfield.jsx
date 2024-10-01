import React from 'react';

export const TextField = ({
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  confirmText,
  name,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[54px] px-[25px] py-3 bg-white rounded-xl border border-slate-200 justify-start items-center inline-flex">
        <input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          name={name}
          className="flex-grow text-black text-xl font-normal font-['Pretendard'] leading-[30px] outline-none placeholder-gray-400"
        />
      </div>
      {error && (
        <div className="h-6 px-[5px] justify-start items-start inline-flex mt-[8px]">
          <div className="text-red-400 text-base font-normal font-['Pretendard'] leading-normal">
            {error}
          </div>
        </div>
      )}
      {confirmText && (
        <div className="h-6 px-[5px] justify-start items-start inline-flex mt-[8px]">
          <div className="text-primary text-base font-normal font-['Pretendard'] leading-normal">
            {confirmText}
          </div>
        </div>
      )}
    </div>
  );
};
