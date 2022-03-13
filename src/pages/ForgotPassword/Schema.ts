import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Schema = Yup.object({
  email: Yup.string()
    .email('forgotPassword.form.email.errors.invalid')
    .required('forgotPassword.form.email.errors.required'),
}).required();

export default yupResolver(Schema);
