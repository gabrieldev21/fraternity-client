import React from 'react';
import ProfileProject from '.';

export default {
  title: 'ProfileProject',
  component: ProfileProject,
};

const projects = [
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

export const ProjectProfile = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      width: '80vw',
      padding: '40px 129px',
      position: 'relative',
      height: '100vh',
    }}
  >
    <ProfileProject projects={projects} />
  </div>
);
