/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import useTheme from 'hooks/useTheme';
import { TextInput, LoadingLogo, Button } from '../../components';
import * as S from './styleds';
import RegisterSchema from './RegisterSchema';

const Register = () => {
  const { register, handleSubmit, formState } = useForm<TFieldValues>({
    mode: 'onBlur',
    resolver: RegisterSchema,
  });
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(Number);

  const onSubmit = () => {
    //  TODO: Integrate with api
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
              {...register('nome')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={formState.errors.name?.message}
              color={theme.colors.white}
              type="name"
              label="Nome"
            />
            <TextInput
              {...register('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={formState.errors.password?.message}
              color={theme.colors.white}
              type="password"
              label="Senha"
            />
            <TextInput
              {...register('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={formState.errors.email?.message}
              color={theme.colors.white}
              type="email"
              label="E-mail"
            />
            <TextInput
              {...register('telefone')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={formState.errors.phone?.message}
              color={theme.colors.white}
              type="telephone"
              label="Telefone"
            />
            <Button>Registrar</Button>
          </S.Fade>
        )}
      </S.CardContainer>
    </S.Wrapper>
  );
};

export default Register;
