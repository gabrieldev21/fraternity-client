import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const LoginSchema = Yup.object({
  email: Yup.string().email('signup.form.email.errors.invalid').required('signup.form.email.errors.required'),
  password: Yup.string().required('signup.form.password.errors.required'),
}).required();

export default yupResolver(LoginSchema);
