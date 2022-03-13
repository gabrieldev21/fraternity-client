import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const LoginSchema = Yup.object({
  email: Yup.string().email('login.form.email.errors.invalid').required('login.form.email.errors.required'),
  password: Yup.string().required('login.form.password.errors.required'),
}).required();

export default yupResolver(LoginSchema);
