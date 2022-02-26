/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import useTheme from 'hooks/useTheme';
import { TextInput, LoadingLogo, Button } from 'components/';
import * as S from './styleds';
import RegisterSchema from './RegisterSchema';

type RegisterForm = {
  name: string,
  email: string,
  password: string,
};

const Register = () => {
  const { register, handleSubmit, formState } = useForm<RegisterForm>({
    mode: 'onBlur',
    resolver: RegisterSchema,
  });
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

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
              {...register('name')}
              error={formState.errors.name?.message}
              color={theme.colors.white}
              type="name"
              label={t('input.name')}
            />
            <TextInput
              {...register('password')}
              error={formState.errors.password?.message}
              color={theme.colors.white}
              type="password"
              label={t('input.password')}
            />
            <TextInput
              {...register('email')}
              error={formState.errors.email?.message}
              color={theme.colors.white}
              type="email"
              label={t('input.email')}
            />
            <Button>{t('button.signup')}</Button>
          </S.Fade>
        )}
      </S.CardContainer>
    </S.Wrapper>
  );
};

export default Register;
