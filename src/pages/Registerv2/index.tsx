import React from 'react';
import { BsPersonLinesFill, BsFillEyeFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Input from 'components/LoginInput';
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
        <S.FormWrapper>
          <S.FormRow>
            <Input label="First name" icon={<BsPersonLinesFill />} />
            <Input label="Last name" icon={<BsPersonLinesFill />} />
          </S.FormRow>
          <S.FormRow>
            <Input label="Email" type="email" icon={<MdEmail />} />
          </S.FormRow>
          <S.FormRow>
            <Input label="Password" type="password" icon={<BsFillEyeFill />} />
          </S.FormRow>
        </S.FormWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
