import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';
import * as S from './styleds';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const handleClick = () => {
    setSearchText('');
  };

  return (
    <S.Container>
      <MdSearch />
      <input value={searchText} placeholder="Buscar" onChange={(evt) => setSearchText(evt.currentTarget.value)} />
      {searchText && (
        <S.Wrapper>
          <S.UserContainer onClick={handleClick}>
            <S.Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQF56johHTDiXg/profile-displayphoto-shrink_800_800/0/1652218834579?e=1659571200&v=beta&t=KPK-rCPJJegCU-SChkuIyqz_Bdujo072CX3COBhOT48" />
            <div>
              <S.Title>Gabriel Amorim</S.Title>
              <S.Subtitle>Estudante</S.Subtitle>
            </div>
          </S.UserContainer>
        </S.Wrapper>
      )}
    </S.Container>
  );
};

Search.displayName = 'Search';

export default Search;
