import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdPerson, MdLockOutline } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from 'react-redux';

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
  const history = useHistory();
  // const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: LoginForm) => {
    // TODO: Integrate with api
    setLoading(true);
    setLoading(false);
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
              label={t('input.email')}
              icon={MdPerson}
            />
            <TextInput
              {...register('password')}
              error={formState.errors.password?.message}
              color={theme.colors.white}
              type="password"
              label={t('input.password')}
              icon={MdLockOutline}
            />
            <Button type="submit">{t('button.signin')}</Button>
          </S.Fade>
        )}
      </S.CardContainer>
    </S.Wrapper>
  );
};

export default Login;
