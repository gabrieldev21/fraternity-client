import React, { useState } from 'react';
import Loading from 'components/Loading';
import Modal from 'components/Modal';
import Dialog from 'components/Dialog';
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
  isCurrent?: boolean;
}

const ProfileUser = ({ banner, photo, name, title, city, state, networkNumber, isCurrent }: ProfileUserProps) => {
  const [loading, setLoading] = useState(false);
  const [openDialogMessage, setOpenDialogMessage] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenDialogMessage(true);
    }, 1200);
  };

  return (
    <S.CardStyled>
      <S.Banner src={banner} />
      <S.Actions>
        {isCurrent && (
          <S.IconButton>
            <img src={edit} alt="editar profile" />
            <span>Edit Profile</span>
          </S.IconButton>
        )}
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
          <S.ButtonPrimary onClick={handleLoading}>{isCurrent ? 'Contatos' : 'Oferecer Mentoria'}</S.ButtonPrimary>
          {loading && (
            <Modal>
              <Loading />
            </Modal>
          )}
          <Dialog
            isOpen={openDialogMessage}
            background="#fff"
            onClose={() => setOpenDialogMessage(false)}
            width="400px"
            hideCloseButton
          >
            <S.TextLoginMessage>
              Enviamos um email para Gabriel Pereira com uma carta de apresentação, aguarde-o aceitar.
            </S.TextLoginMessage>
            <S.MessageButton onClick={() => setOpenDialogMessage(false)}> JÁ É </S.MessageButton>
          </Dialog>
          <S.ButtonSecondary>{networkNumber} Conexões</S.ButtonSecondary>
        </S.ContentText>
      </S.Content>
    </S.CardStyled>
  );
};

ProfileUser.defaultProps = {
  isCurrent: false,
};

export default ProfileUser;
