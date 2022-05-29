import moment from 'moment';
import React from 'react';
import Academy from '.';

export default {
  title: 'ProfileAcademy',
  component: Academy,
};

const academics = [
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

export const ProfileAcademy = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      width: '80vw',
      padding: '40px 129px',
      position: 'relative',
      height: '100vh',
    }}
  >
    <Academy academics={academics} />
  </div>
);
