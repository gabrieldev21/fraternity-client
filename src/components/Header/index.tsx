import React, { useState } from 'react';

import Search from 'components/Search';
import { MdHomeFilled, MdOutlineChatBubble, MdPeopleAlt, MdSearch, MdSettings } from 'react-icons/md';
import * as S from './styleds';

import { IHeader } from './types';

const Header = ({ isScrolled }: IHeader) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <S.Wrapper isScrolled={isScrolled}>
      <S.Item onClick={() => setShowSearch(!showSearch)} as="div">
        <MdSearch size={32} />
      </S.Item>
      {showSearch ? (
        <Search />
      ) : (
        <>
          <S.Item to="/">
            <MdHomeFilled size={32} />
          </S.Item>
          <S.Item to="/friends">
            <MdPeopleAlt size={32} />
          </S.Item>
          <S.Item to="/messages">
            <MdOutlineChatBubble size={32} />
          </S.Item>
          <S.Item to="/settings">
            <MdSettings size={32} />
          </S.Item>
        </>
      )}
    </S.Wrapper>
  );
};

export default Header;
