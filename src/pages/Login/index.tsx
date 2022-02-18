/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { MdPerson, MdLockOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';

import useTheme from 'hooks/useTheme';
import { TextInput, LoadingLogo, Button } from 'components/';
import * as S from './styleds';
import LoginSchema from './LoginSchema';

type LoginForm = {
  email: string,
  password: string,
};

const Login = () => {
  const { register, handleSubmit, formState } = useForm<LoginForm>({
    mode: 'onBlur',
    resolver: LoginSchema,
  });
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const onSubmit = () => {
    // TODO: Integrate with api
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <S.Wrapper>
      <S.CardContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        {loading ? (
          <LoadingLogo />
        ) : (
          <S.Fade>
            <S.LogoTransparent />
            <TextInput
              {...register('email')}
              error={formState.errors.email?.message}
              color={theme.colors.white}
              type="email"
              label="E-mail"
              icon={MdPerson}
            />
            <TextInput
              {...register('password')}
              error={formState.errors.password?.message}
              color={theme.colors.white}
              type="password"
              label="Senha"
              icon={MdLockOutline}
            />
            <Button>Entrar</Button>
          </S.Fade>
        )}
      </S.CardContainer>
    </S.Wrapper>
  );
};

export default Login;
