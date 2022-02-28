import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const RegisterSchema = Yup.object({
  firstName: Yup.string().required('signup.form.firstName.errors.required'),
  lastName: Yup.string().required('signup.form.lastName.errors.required'),
  email: Yup.string().email('signup.form.email.errors.invalid').required('signup.form.email.errors.required'),
  password: Yup.string().required('signup.form.password.errors.required'),
}).required();

export default yupResolver(RegisterSchema);
