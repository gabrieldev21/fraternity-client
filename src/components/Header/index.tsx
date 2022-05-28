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
        <S.Avatar
          src="https://images-ext-1.discordapp.net/external/Juv7hur1BFvMLsyDnSY59UxD-eV-BYD_WUjGh5-mVR0/https/lh3.googleusercontent.com/pw/AM-JKLVgojX2kbYA-V16vetLTa0aHyZmnXYO9Wh4-gOvEHFlR2LCWG7UBYLGIcUqsUdGaa5KuqkpGBHAvzfWt0FOhYZLcHYo7wiT8l1LHc_T460n0vOIDa8i2LiRpTr869nRXRFXz6lMRtP8PGv3qfoAugJbgg%3Dw742-h989-no?width=506&height=676"
          alt="photo"
        />
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
