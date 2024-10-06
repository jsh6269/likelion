import React from 'react';
import { SearchIcon } from './search-icon';

export const SearchTextField = () => {
  return (
    <div className="flex items-center justify-between w-[354px] h-[54px] px-5 py-3 gap-4 rounded-lg border border-solid border-Neutral-400 bg-Neutral-100">
      <SearchIcon />
      <input
        type="text"
        className="flex-1 outline-none bg-transparent text-black"
        placeholder="닉네임 검색"
      />
    </div>
  );
};
