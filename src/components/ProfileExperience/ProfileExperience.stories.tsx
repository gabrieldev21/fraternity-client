import moment from 'moment';
import React from 'react';
import ProfileExperience, { Experience } from '.';

export default {
  title: 'ProfileExperience',
  component: ProfileExperience,
};

const experiences: Experience[] = [
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

export const ProfileExperienceComponent = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      width: '80vw',
      padding: '40px 129px',
      position: 'relative',
      height: '100vh',
    }}
  >
    <ProfileExperience experiences={experiences} />
  </div>
);
