import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Unauthenticated, {
  Title,
  Subtitle,
  LinkStyled,
  FormWrapper,
  FormRow,
  ButtonRow,
} from 'components/templates/Unauthenticated';
import Button from 'components/Button';
import Input from 'components/Input';
import { authentication } from 'store/modules/user';
import LoginSchema from './LoginSchema';

type LoginForm = {
  email: string,
  password: string,
};

const Login = () => {
  const { register, handleSubmit, formState } = useForm<LoginForm>({
    mode: 'onChange',
    resolver: LoginSchema,
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    const success = await dispatch(authentication(data));
    setLoading(false);
    if (!success) return;
    history.replace('/');
  };

  return (
    <Unauthenticated loading={loading}>
      <Title>{t('login.title')}</Title>
      <Subtitle>
        {t('login.subtitle')} <LinkStyled to="/register">{t('login.subtitleLink')}</LinkStyled>
      </Subtitle>
      <FormWrapper as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Input
            {...register('email')}
            error={t(formState.errors.email?.message || '')}
            label={t('login.form.email.label')}
            type="email"
            icon={<MdEmail />}
          />
        </FormRow>
        <FormRow>
          <Input
            {...register('password')}
            error={t(formState.errors.password?.message || '')}
            label={t('login.form.password.label')}
            type="password"
            icon={<BsFillEyeFill />}
          />
        </FormRow>
        <ButtonRow>
          <Button disabled={!formState.isValid} type="submit">
            {t('login.buttonSubmit')}
          </Button>
        </ButtonRow>
      </FormWrapper>
    </Unauthenticated>
  );
};

export default Login;
