import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { logout } from 'store/modules/user';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as S from './styleds';

const Authenticated: React.FC = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const handleScroll = (evt: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(evt.currentTarget.scrollTop !== 0);
  };

  return (
    <S.Wrapper onScroll={handleScroll}>
      <Header
        url={location.pathname}
        isScrolled={isScrolled}
        onLogout={() => dispatch(logout())}
        userHeader={{
          name: 'Daniel Pereira',
          role: 'Mentor',
          photo:
            'https://images-ext-1.discordapp.net/external/Juv7hur1BFvMLsyDnSY59UxD-eV-BYD_WUjGh5-mVR0/https/lh3.googleusercontent.com/pw/AM-JKLVgojX2kbYA-V16vetLTa0aHyZmnXYO9Wh4-gOvEHFlR2LCWG7UBYLGIcUqsUdGaa5KuqkpGBHAvzfWt0FOhYZLcHYo7wiT8l1LHc_T460n0vOIDa8i2LiRpTr869nRXRFXz6lMRtP8PGv3qfoAugJbgg%3Dw742-h989-no?width=506&height=676',
        }}
      />
      {children}
      <Footer />
    </S.Wrapper>
  );
};

export default Authenticated;
