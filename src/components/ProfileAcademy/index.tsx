import Card from 'components/Card';
import moment from 'moment';
import React from 'react';
import * as S from './styleds';

interface Academy {
  image: string;
  title: string;
  startedAt: Date;
  finishedAt?: Date;
  description: string;
  companyName: string;
}

export interface AcademyProps {
  academics: Academy[];
}

const ProfileAcademy = ({ academics }: AcademyProps) => {
  return (
    <Card>
      <S.Title>Formação</S.Title>
      {academics.map((academy, idx) => (
        <S.Item mt={!!idx} key={academy.title}>
          <S.Image src={academy.image} />
          <S.ContentText>
            <S.ItemTitle>{academy.companyName}</S.ItemTitle>
            <div>
              <S.Text>{academy.title}</S.Text>
            </div>
            <div>
              <S.Text>{moment(academy.startedAt).format('YYYY')}</S.Text>
              {' — '}
              <S.Text>{academy.finishedAt ? moment(academy.finishedAt).format('YYYY') : 'Presente'}</S.Text>
            </div>
            <S.Text>{academy.description}</S.Text>
          </S.ContentText>
        </S.Item>
      ))}
    </Card>
  );
};

export default ProfileAcademy;
