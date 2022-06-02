import React from 'react';

import Authenticated from 'components/templates/Authenticated';
import ProfileUser, { ProfileUserProps } from 'components/ProfileUser';
import ProfileProject, { Project } from 'components/ProfileProject';
import ProfileExperience, { Experience } from 'components/ProfileExperience';
import ProfileAcademy, { Academy } from 'components/ProfileAcademy';
import * as S from './styleds';

export interface IProfile {
  user: ProfileUserProps;
  projects: Project[];
  experiences: Experience[];
  academics: Academy[];
}

const Profile = ({ user, projects, experiences, academics }: IProfile) => {
  return (
    <Authenticated>
      <S.Container>
        <S.Wrapper>
          <ProfileUser {...user} />
          <ProfileProject projects={projects} />
          <ProfileExperience experiences={experiences} />
          <ProfileAcademy academics={academics} />
        </S.Wrapper>
      </S.Container>
    </Authenticated>
  );
};

export default Profile;
