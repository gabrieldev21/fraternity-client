import React from 'react';

import Modal from 'components/Modal';

import { BsXLg } from 'react-icons/bs';
import * as S from './styleds';

export interface DialogModal {
  children: string;
}

const Dialog: React.FC<DialogModal> = ({ children }) => {
  return (
    <Modal>
      <S.DialogModal>
        <S.DialogCloseButton>
          <BsXLg />
        </S.DialogCloseButton>
        <S.Container>
          <S.DialogText>{children}</S.DialogText>
          <S.DialogButton>Ok</S.DialogButton>
        </S.Container>
      </S.DialogModal>
    </Modal>
  );
};

export default Dialog;
