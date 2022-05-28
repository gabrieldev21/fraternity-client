import React from 'react';

import Search from 'components/Search';

import { ChatIcon, FeedIcon, FriendsIcon, LogoutIcon, NotificationIcon } from 'components/SVG';

import { IHeader } from './types';
import * as S from './styleds';

const Header = ({ isScrolled, url, onLogout, userHeader }: IHeader) => {
  return (
    <S.Wrapper isScrolled={isScrolled}>
      <S.Item to="/">
        <S.Logo />
      </S.Item>
      <S.SplitLine />
      <S.LinkItens isActive={url === '/feed'} to="/feed">
        <FeedIcon />
        <S.Text>FEED</S.Text>
      </S.LinkItens>
      <S.LinkItens isActive={url === '/friends'} to="/friends">
        <FriendsIcon />
        <S.Text>AMIGOS</S.Text>
      </S.LinkItens>
      <S.LinkItens isActive={url === '/messages'} to="/messages">
        <ChatIcon />
        <S.Text>CHAT</S.Text>
      </S.LinkItens>
      <S.LinkItens isActive={url === '/notifications'} to="/notifications">
        <NotificationIcon />
        <S.Text>NOTIFICAÇÕES</S.Text>
      </S.LinkItens>
      <S.SplitLine />
      <Search placeholder="Buscar" />
      <S.SplitLine />
      <S.User>
        <S.Avatar src={userHeader.photo} />
        <S.UserText>
          <S.Text>{userHeader.name}</S.Text>
          <S.TextRole>{userHeader.role}</S.TextRole>
        </S.UserText>
      </S.User>
      <S.SplitLine />
      <S.Item to="" onClick={() => onLogout()}>
        <LogoutIcon />
        <S.Text>SAIR</S.Text>
      </S.Item>
    </S.Wrapper>
  );
};

export default Header;
