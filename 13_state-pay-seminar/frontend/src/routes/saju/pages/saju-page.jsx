import React from 'react';
import SajuSearch from '../components/search-template';
import { SearchOutputTheme } from '../components/search-output-theme';

const SajuPage = () => {
  return (
    <div className="w-full py-24 bg-gradient-to-b from-neutral-400 to-neutral-200">
      <SajuSearch />
      <SearchOutputTheme />
    </div>
  );
};

export default SajuPage;
