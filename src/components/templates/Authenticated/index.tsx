import React, { useState } from 'react';
import Header from 'components/Header';
import * as S from './styleds';

const Authenticated: React.FC = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (evt: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(evt.currentTarget.scrollTop !== 0);
  };

  return (
    <S.Wrapper onScroll={handleScroll}>
      <Header isScrolled={isScrolled} />
      {children}
    </S.Wrapper>
  );
};

export default Authenticated;
