import React from 'react';
import { useDispatch } from 'react-redux';

import Search from 'components/Search';
import { logout } from 'store/modules/user';

import { ChatIcon, FeedIcon, FriendsIcon, LogoutIcon, NotificationIcon } from 'components/SVG';
import { IHeader } from './types';
import * as S from './styleds';

const Header = ({ isScrolled }: IHeader) => {
  const dispatch = useDispatch();

  return (
    <S.Wrapper isScrolled={isScrolled}>
      <S.Item to="/">
        <S.Logo />
      </S.Item>
      <S.SplitLine />
      <S.WrapperItens>
        <S.Item to="/friends">
          <FeedIcon />
          <S.Text>FEED</S.Text>
        </S.Item>
        <S.Item to="/friends">
          <FriendsIcon />
          <S.Text>AMIGOS</S.Text>
        </S.Item>
        <S.Item to="/messages">
          <ChatIcon />
          <S.Text>CHAT</S.Text>
        </S.Item>
        <S.Item to="/messages">
          <NotificationIcon />
          <S.Text>NOTIFICAÇÕES</S.Text>
        </S.Item>
      </S.WrapperItens>
      <S.SplitLine />
      <Search placeholder="Buscar" />
      <S.SplitLine />
      <S.User>
        <S.Text>DANIEL PEREIRA</S.Text>
      </S.User>
      <S.SplitLine />
      <S.Item to="" onClick={() => dispatch(logout())}>
        <LogoutIcon />
        <S.Text>SAIR</S.Text>
      </S.Item>
    </S.Wrapper>
  );
};

export default Header;
