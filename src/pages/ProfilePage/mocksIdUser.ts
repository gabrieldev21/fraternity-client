import moment from 'moment';
import bannerImage from 'assets/images/banner.png';
import { IProfile } from 'components/Profile';

export const projects = [
  {
    title: 'Gerenciamento de estoque',
    subtitle: 'Fullstack',
    date: new Date(),
    image: 'https://cdn.dribbble.com/users/3948435/screenshots/7237664/media/34c74a202e6ca30ec4ef5de54e614247.jpg',
  },
  {
    title: 'Alugueis de apartamentos',
    subtitle: 'Fullstack',
    date: new Date(),
    image: 'https://i.pinimg.com/originals/5d/66/fe/5d66fe02fc2d0612e17276c8328c275b.jpg',
  },
  {
    title: 'Gerando senhas com IA',
    subtitle: 'Fullstack',
    date: new Date(),
    image:
      'https://img.freepik.com/vector-gratis/icono-isometrico-tecnologia-informatica-sala-servidores-conjunto-dispositivos-digitales-elemento-diseno-computadora-portatil-pc_39422-1026.jpg',
  },
  { title: '', subtitle: '', image: '', date: new Date() },
  { title: '', subtitle: '', image: '', date: new Date() },
  { title: '', subtitle: '', image: '', date: new Date() },
  { title: '', subtitle: '', image: '', date: new Date() },
  { title: '', subtitle: '', image: '', date: new Date() },
  { title: '', subtitle: '', image: '', date: new Date() },
  { title: '', subtitle: '', image: '', date: new Date() },
  { title: '', subtitle: '', image: '', date: new Date() },
  { title: '', subtitle: '', image: '', date: new Date() },
];

export const experiences = [
  {
    image: 'https://portal.unicarioca.edu.br/themes/unicarioca//imagens/login/login.empresa.png',
    title: 'Desenvolvedor Frontend',
    company: 'Fraternity',
    location: 'Internacional',
    description: 'Desenvolvimento frontend utilizando a stack ReactJS, Redux, Styled Components',
    startedAt: moment('16-09-1997', 'DD-MM-YYYY').toDate(),
    finishedAt: moment('12-12-2002', 'DD-MM-YYYY').toDate(),
  },
  {
    image: 'https://portal.unicarioca.edu.br/themes/unicarioca//imagens/login/login.empresa.png',
    title: 'Desenvolvedor Backend',
    company: 'Fraternity',
    location: 'Internacional',
    description: 'Desenvolvimento backend utilizando a stack NestJs, express e mongoose',
    startedAt: moment('16-09-1997', 'DD-MM-YYYY').toDate(),
  },
];

export const academics = [
  {
    companyName: 'Centro Universitário Carioca',
    title: 'Bacharel em Ciências da Computação',
    image: 'https://portal.unicarioca.edu.br/themes/unicarioca//imagens/login/login.empresa.png',
    description: 'Pude lecionar turmas particuladores em lógica de programação',
    startedAt: moment('16-09-1997', 'DD-MM-YYYY').toDate(),
    finishedAt: moment('16-09-2000', 'DD-MM-YYYY').toDate(),
  },
  {
    companyName: 'Centro Universitário Carioca',
    title: 'Mestrado em Ciências da Computação',
    image: 'https://portal.unicarioca.edu.br/themes/unicarioca//imagens/login/login.empresa.png',
    description: 'Pude lecionar turmas particuladores em lógica de programação',
    startedAt: moment('16-09-1997', 'DD-MM-YYYY').toDate(),
    finishedAt: moment('16-09-2000', 'DD-MM-YYYY').toDate(),
  },
];

const profileMocks: IProfile = {
  user: {
    banner: `${bannerImage}`,
    photo:
      'https://images-ext-1.discordapp.net/external/Juv7hur1BFvMLsyDnSY59UxD-eV-BYD_WUjGh5-mVR0/https/lh3.googleusercontent.com/pw/AM-JKLVgojX2kbYA-V16vetLTa0aHyZmnXYO9Wh4-gOvEHFlR2LCWG7UBYLGIcUqsUdGaa5KuqkpGBHAvzfWt0FOhYZLcHYo7wiT8l1LHc_T460n0vOIDa8i2LiRpTr869nRXRFXz6lMRtP8PGv3qfoAugJbgg%3Dw742-h989-no?width=506&height=676',
    name: 'Gabriel Pereira',
    title: 'Desenvolvedor Front End - Especialista',
    state: 'RJ',
    city: 'Rio de Janeiro',
    networkNumber: 832,
  },
  projects,
  experiences,
  academics,
};

export default profileMocks;
