import React from 'react';
import { SajuLion } from './saju-lion';
import { SajuSearchContainer } from './search-container';

const SajuSearch = () => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center pb-20">
      <SajuLion />
      <SajuSearchContainer />
    </div>
  );
};

export default SajuSearch;
