import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const LoginSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
  telephone: Yup.string().required('Campo obrigatório'),
}).required();

export default yupResolver(LoginSchema);
