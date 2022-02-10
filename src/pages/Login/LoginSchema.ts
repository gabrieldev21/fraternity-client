import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const LoginSchema = Yup.object({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
}).required();

export default yupResolver(LoginSchema);
