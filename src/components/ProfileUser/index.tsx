import React from 'react';
import edit from 'assets/svgs/edit-profile.svg';
import navigation from 'assets/svgs/navigation-profile.svg';
import * as S from './styleds';

export interface ProfileUserProps {
  banner: string;
  photo: string;
  name: string;
  title: string;
  state: string;
  city: string;
  networkNumber: number;
}

const ProfileUser = ({ banner, photo, name, title, city, state, networkNumber }: ProfileUserProps) => {
  return (
    <S.CardStyled>
      <S.Banner src={banner} />
      <S.Actions>
        <S.IconButton>
          <img src={edit} alt="editar profile" />
          <span>Edit Profile</span>
        </S.IconButton>
      </S.Actions>
      <S.Content>
        <S.Avatar src={photo} />
        <S.ContentText>
          <S.Name>
            {name}
            <S.Location>
              <img src={navigation} alt="ícone de navegação" />
              <span>{`${city}, ${state}`}</span>
            </S.Location>
          </S.Name>
          <S.Title>{title}</S.Title>
          <S.ButtonPrimary>Contatos</S.ButtonPrimary>
          <S.ButtonSecondary>{networkNumber} Conexões</S.ButtonSecondary>
        </S.ContentText>
      </S.Content>
    </S.CardStyled>
  );
};

export default ProfileUser;
