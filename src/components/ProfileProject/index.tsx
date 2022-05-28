import Card from 'components/Card';
import LinkButton from 'components/LInkButton';
import moment from 'moment';
import React from 'react';
import * as S from './styleds';

interface Project {
  title: string;
  subtitle: string;
  date: Date;
  image: string;
}

export interface ProfileProjectProps {
  projects: Project[];
}

const ProfileProject = ({ projects }: ProfileProjectProps) => {
  return (
    <Card>
      <S.Title>
        <span>Projetos</span>
        <S.Pagination>3 de {projects.length}</S.Pagination>
      </S.Title>
      <S.ListContainer>
        {projects.slice(0, 3).map((project, idx) => (
          <S.ItemContainer key={project.title}>
            <S.Image src={project.image} alt={`image ${idx} of project`} />
            <S.ItemTitle>{project.title}</S.ItemTitle>
            <S.ItemDescription>{`${project.subtitle}, ${moment(project.date).format('L')}`}</S.ItemDescription>
          </S.ItemContainer>
        ))}
      </S.ListContainer>
      <LinkButton>Ver mais ({projects.length})</LinkButton>
    </Card>
  );
};

export default ProfileProject;
