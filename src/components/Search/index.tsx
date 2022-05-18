import React, { forwardRef } from 'react';

import { MdSearch } from 'react-icons/md';
import * as S from './styleds';

type InputProps = React.HTMLProps<HTMLInputElement>;

const Search = forwardRef<HTMLInputElement, InputProps>(({ ...others }, ref) => {
  return (
    <S.Wrapper>
      <MdSearch />
      <input ref={ref} {...others} />
    </S.Wrapper>
  );
});

Search.displayName = 'Search';

export default Search;
