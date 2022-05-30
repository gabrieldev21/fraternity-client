import React from 'react';

import bannerImage from 'assets/images/banner.png';
import Authenticated from 'components/templates/Authenticated';
import ProfileUser from 'components/ProfileUser';
import ProfileProject from 'components/ProfileProject';
import Experience from 'components/ProfileExperience';
import ProfileAcademy from 'components/ProfileAcademy';
import * as S from './styleds';

import { academics, experiences, projects } from './mocks';

const Home = () => {
  return (
    <Authenticated>
      <S.Container>
        <ProfileUser
          banner={`${bannerImage}`}
          photo="https://images-ext-1.discordapp.net/external/Juv7hur1BFvMLsyDnSY59UxD-eV-BYD_WUjGh5-mVR0/https/lh3.googleusercontent.com/pw/AM-JKLVgojX2kbYA-V16vetLTa0aHyZmnXYO9Wh4-gOvEHFlR2LCWG7UBYLGIcUqsUdGaa5KuqkpGBHAvzfWt0FOhYZLcHYo7wiT8l1LHc_T460n0vOIDa8i2LiRpTr869nRXRFXz6lMRtP8PGv3qfoAugJbgg%3Dw742-h989-no?width=506&height=676"
          name="Daniel Pereira"
          title="Desenvolvedor Front End - Especialista"
          state="RJ"
          city="Rio de Janeiro"
          networkNumber={832}
        />
        <ProfileProject projects={projects} />
        <Experience experiences={experiences} />
        <ProfileAcademy academics={academics} />
      </S.Container>
    </Authenticated>
  );
};

export default Home;
