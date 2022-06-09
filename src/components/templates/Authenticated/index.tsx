import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { logout } from 'store/modules/user';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as S from './styleds';

const Authenticated: React.FC = ({ children }) => {
  const { name, photo, role } = useSelector((state: RootStateOrAny) => state?.user);
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
        userHeader={{ name, role, photo }}
      />
      {children}
      <Footer />
    </S.Wrapper>
  );
};

export default Authenticated;
