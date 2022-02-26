import React from 'react';
import * as S from './styleds';

const Register = () => {
  return (
    <S.Wrapper>
      <S.Image />
      <S.CutImage />
      <S.Logo />
      <S.Container>
        <S.Title>Create new account.</S.Title>
        <S.Subtitle>
          Already A Member? <S.LinkStyled to="/login">Log in</S.LinkStyled>
        </S.Subtitle>
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
