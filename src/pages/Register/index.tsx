/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsPersonLinesFill, BsFillEyeFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import api from 'utils/api';
import Input from 'components/Input';
import Button from 'components/Button';
import Unauthenticated, {
  Title,
  Subtitle,
  LinkStyled,
  FormWrapper,
  FormRow,
  ButtonRow,
} from 'components/templates/Unauthenticated';
import RegisterSchema from './RegisterSchema';

type RegisterForm = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<RegisterForm>({
    mode: 'onChange',
    resolver: RegisterSchema,
  });

  const { t } = useTranslation();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await api.post('user/', data);
    } catch (error) {}
    alert('Tá cadastrado negão');
  };

  return (
    <Unauthenticated loading={loading}>
      <Title>{t('signup.title')}</Title>
      <Subtitle>
        {t('signup.subtitle')} <LinkStyled to="/login">{t('signup.subtitleLink')}</LinkStyled>
      </Subtitle>
      <FormWrapper as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Input
            {...register('firstName')}
            error={t(formState.errors.firstName?.message || '')}
            label={t('signup.form.firstName.label')}
            icon={<BsPersonLinesFill />}
          />
          <Input
            {...register('lastName')}
            error={t(formState.errors.lastName?.message || '')}
            label={t('signup.form.lastName.label')}
            icon={<BsPersonLinesFill />}
          />
        </FormRow>
        <FormRow>
          <Input
            {...register('email')}
            error={t(formState.errors.email?.message || '')}
            label={t('signup.form.email.label')}
            type="email"
            icon={<MdEmail />}
          />
        </FormRow>
        <FormRow>
          <Input
            {...register('password')}
            error={t(formState.errors.password?.message || '')}
            label={t('signup.form.password.label')}
            type="password"
            icon={<BsFillEyeFill />}
          />
        </FormRow>
        <ButtonRow>
          <Button disabled={!formState.isValid} type="submit">
            {t('signup.buttonSubmit')}
          </Button>
        </ButtonRow>
      </FormWrapper>
    </Unauthenticated>
  );
};

export default Register;
