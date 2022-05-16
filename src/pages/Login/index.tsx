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
import Input from 'components/Input';
import { authentication } from 'store/modules/user';
import Dialog from 'components/Dialog';
import LoginSchema from './LoginSchema';
import { LoginForm } from './types';
import { ErrorButton, StyledButton, TextLoginError } from './styleds';

const Login = () => {
  const { register, handleSubmit, formState } = useForm<LoginForm>({
    mode: 'onChange',
    resolver: LoginSchema,
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [openDialogError, setOpenDialogError] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    const success = await dispatch(authentication(data));
    setLoading(false);
    if (!success) {
      setOpenDialogError(true);
    } else {
      history.replace('/');
    }
  };

  const onCancel = () => {
    history.push('/');
  };

  return (
    <Unauthenticated loading={loading}>
      <Title>{t('login.title')}</Title>
      <Subtitle>
        {t('login.subtitle')} <LinkStyled to="/forgot-password">{t('login.subtitleLink')}</LinkStyled>
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
          <StyledButton variant="secondary" onClick={onCancel} type="button">
            {t('login.buttonCancel')}
          </StyledButton>
          <Dialog isOpen={openDialogError} onClose={() => setOpenDialogError(false)} width="400px" hideCloseButton>
            <TextLoginError>{t('login.error')}</TextLoginError>
            <ErrorButton>OK</ErrorButton>
          </Dialog>
          <StyledButton disabled={!formState.isValid} type="submit">
            {t('login.buttonSubmit')}
          </StyledButton>
        </ButtonRow>
      </FormWrapper>
    </Unauthenticated>
  );
};

export default Login;
