import React from 'react';

import { MdSearch } from 'react-icons/md';
import * as S from './styleds';

const Search = () => {
  return (
    <S.Wrapper>
      <S.Image>
        <MdSearch />
      </S.Image>
      <S.Input placeholder="Search your mentorship" />
    </S.Wrapper>
  );
};

export default Search;
