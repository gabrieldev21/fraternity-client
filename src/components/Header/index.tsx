import React from 'react';
import { MdHomeFilled, MdOutlineChatBubble, MdPeopleAlt, MdSearch, MdSettings } from 'react-icons/md';
import * as S from './styleds';

interface IHeader {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: IHeader) => {
  return (
    <S.Wrapper isScrolled={isScrolled}>
      <S.Item to="/">
        <MdHomeFilled size={32} />
      </S.Item>
      <S.Item as="div">
        <MdSearch size={32} />
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
    </S.Wrapper>
  );
};

export default Header;
