import Card from 'components/Card';
import moment from 'moment';
import React from 'react';
import * as S from './styleds';

export interface Experience {
  image: string;
  title: string;
  company: string;
  location: string;
  startedAt: Date;
  finishedAt?: Date;
  description: string;
}

export interface ExperienceProps {
  experiences: Experience[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <Card>
      <S.Title>Experiências</S.Title>
      {experiences?.map((experience, idx) => (
        <S.Item mt={!!idx} key={experience.title}>
          <S.Image src={experience.image} />
          <S.ContentText>
            <S.TitleExperience>{experience.title}</S.TitleExperience>
            <div>
              <S.Text>{experience.company}</S.Text>
              <S.Text ml fontWeight={300}>
                {experience.location}
              </S.Text>
            </div>
            <div>
              <S.Text>{moment(experience.startedAt).format('MMM YYYY')}</S.Text> —{' '}
              <S.Text>{experience.finishedAt ? moment(experience.finishedAt).format('MMM YYYY') : 'Presente'}</S.Text>
              <S.Text ml isBlue>
                {experience.finishedAt &&
                  `${moment(experience.finishedAt).diff(moment(experience.startedAt), 'months')} meses`}
              </S.Text>
            </div>
            <S.Text>{experience.description}</S.Text>
          </S.ContentText>
        </S.Item>
      ))}
    </Card>
  );
};

export default Experience;
