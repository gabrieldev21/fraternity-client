import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import api from 'utils/api';
import { useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import Unauthenticated, {
  Title,
  Subtitle,
  FormWrapper,
  FormRow,
  ButtonRow,
} from 'components/templates/Unauthenticated';
import Input from 'components/Input';
import Button from 'components/Button';
import Schema from './Schema';

type Form = { email: string };

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { t } = useTranslation();
  const { register, handleSubmit, formState } = useForm<Form>({
    mode: 'onChange',
    resolver: Schema,
  });

  const onSubmit = async (data: Form) => {
    try {
      setLoading(true);
      await api.post('/auth/recovery-password', data);
      // eslint-disable-next-line no-alert
      alert('Um e-mail foi enviado para a sua conta, caso ele exista');
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Erro na conexão com o servidor');
    }
    setLoading(false);
  };

  const onCancel = () => {
    history.push('/login');
  };

  return (
    <Unauthenticated loading={loading}>
      <Title>{t('forgotPassword.title')}</Title>
      <Subtitle>{t('forgotPassword.subtitle')}</Subtitle>
      <FormWrapper as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Input
            {...register('email')}
            error={t(formState.errors.email?.message || '')}
            label={t('forgotPassword.form.email.label')}
            type="email"
            icon={<MdEmail />}
          />
        </FormRow>
        <ButtonRow>
          <Button variant="secondary" type="button" onClick={onCancel}>
            {t('forgotPassword.buttonCancel')}
          </Button>
          <Button disabled={!formState.isValid} type="submit">
            {t('forgotPassword.buttonSubmit')}
          </Button>
        </ButtonRow>
      </FormWrapper>
    </Unauthenticated>
  );
};

export default ForgotPassword;
