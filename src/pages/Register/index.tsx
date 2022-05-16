/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsPersonLinesFill, BsFillEyeFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

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
import Dialog from 'components/Dialog';
import RegisterSchema from './RegisterSchema';
import { ErrorButtonRegister, TextLoginError } from './styleds';

type RegisterForm = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState, setError } = useForm<RegisterForm>({
    mode: 'onChange',
    resolver: RegisterSchema,
  });
  const history = useHistory();
  const { t } = useTranslation();
  const [openDialogRegisterError, setOpenDialogRegisterError] = useState(false);
  const [messageError, setMessageError] = useState('');

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true);
    try {
      await api.post('user', data);
      history.replace('/login');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const responseMessageError = error.response?.data.errors;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.keys(responseMessageError || {}).forEach((errorKey: any) => {
          setError(errorKey, {
            message: responseMessageError[errorKey].message,
          });
          setMessageError(responseMessageError[errorKey].message);
        });
      }
      setLoading(false);
      setOpenDialogRegisterError(true);
    }
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
        <Dialog
          isOpen={openDialogRegisterError}
          onClose={() => setOpenDialogRegisterError(false)}
          width="400px"
          hideCloseButton
        >
          <TextLoginError>{messageError}</TextLoginError>
          <ErrorButtonRegister onClick={() => setOpenDialogRegisterError(false)}>OK</ErrorButtonRegister>
        </Dialog>
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
