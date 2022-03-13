import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import api from 'utils/api';
import { useHistory, useParams } from 'react-router-dom';
import { BsFillEyeFill } from 'react-icons/bs';

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

type Form = { password: string, confirmPassword: string };

const ChangeForgottenPassword = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const history = useHistory();
  const { t } = useTranslation();
  const { register, handleSubmit, formState } = useForm<Form>({
    mode: 'onChange',
    resolver: Schema,
  });

  const onSubmit = async ({ password }: Form) => {
    try {
      setLoading(true);
      await api.post(
        '/auth/new-password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // eslint-disable-next-line no-alert
      alert('Senha alterada');
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Link expirado, solicite um novo');
    }
    history.replace('/login');
    setLoading(false);
  };

  return (
    <Unauthenticated loading={loading}>
      <Title>{t('changeForgottenPassword.title')}</Title>
      <Subtitle>{t('changeForgottenPassword.subtitle')}</Subtitle>
      <FormWrapper as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Input
            {...register('password')}
            error={t(formState.errors.password?.message || '')}
            label={t('changeForgottenPassword.form.password.label')}
            type="password"
            icon={<BsFillEyeFill />}
          />
        </FormRow>
        <FormRow>
          <Input
            {...register('confirmPassword')}
            error={t(formState.errors.confirmPassword?.message || '')}
            label={t('changeForgottenPassword.form.confirmPassword.label')}
            type="password"
            icon={<BsFillEyeFill />}
          />
        </FormRow>
        <ButtonRow>
          <Button disabled={!formState.isValid} type="submit">
            {t('changeForgottenPassword.buttonSubmit')}
          </Button>
        </ButtonRow>
      </FormWrapper>
    </Unauthenticated>
  );
};

export default ChangeForgottenPassword;
