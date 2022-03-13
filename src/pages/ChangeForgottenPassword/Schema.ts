import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Schema = Yup.object({
  password: Yup.string().required('changeForgottenPassword.form.password.errors.required'),
  confirmPassword: Yup.string()
    .required('changeForgottenPassword.form.confirmPassword.errors.required')
    .oneOf([null, Yup.ref('password')], 'changeForgottenPassword.form.confirmPassword.errors.required'),
}).required();

export default yupResolver(Schema);
