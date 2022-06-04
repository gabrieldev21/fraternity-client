import moment from 'moment';
import bannerImage from 'assets/images/banner.png';
import { IProfile } from 'components/Profile';

export const projects = [
  {
    title: 'Trilha de React',
    subtitle: 'Front End, 16 04.2020',
    date: new Date(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjtzi7IjHlC6U9ZlTRH8x8tFI8ZywWolFWw&usqp=CAU',
  },
  {
    title: 'Trilha NodeJs',
    subtitle: 'Back end, 08.20.2020',
    date: new Date(),
    image: 'https://miro.medium.com/max/930/0*MNVJq_8e0SJoqZb5.jpg',
  },
  {
    title: 'Por dentro da Matrix',
    subtitle: 'Python, 05. 03.2021',
    date: new Date(),
    image: 'https://files.nsctotal.com.br/s3fs-public/2019-08/MTX01_0.jpg?nk1pZS3h9LJZOqvkHvlwINcM1Jqe8TzQ',
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

export const academics = [
  {
    companyName: 'Centro Universitário Carioca',
    title: 'Bacharel em Ciências da Computação',
    image: 'https://portal.unicarioca.edu.br/themes/unicarioca//imagens/login/login.empresa.png',
    description: 'Pude realizar cursos extracurricular em desenvolvimento web',
    startedAt: moment('01-01-2016', 'DD-MM-YYYY').toDate(),
  },
];

const profileMocks: IProfile = {
  user: {
    banner: `${bannerImage}`,
    photo:
      'https://media-exp1.licdn.com/dms/image/C4D03AQF56johHTDiXg/profile-displayphoto-shrink_800_800/0/1652218834579?e=1659571200&v=beta&t=KPK-rCPJJegCU-SChkuIyqz_Bdujo072CX3COBhOT48',
    name: 'Gabriel Pereira',
    title: 'Estudante de desenvolvimento web',
    state: 'RJ',
    city: 'Rio de Janeiro',
    networkNumber: 400,
  },
  projects,
  academics,
};

export default profileMocks;
