import React from 'react';
import { BsXLg } from 'react-icons/bs';

import Modal from 'components/Modal';
import { DialogModal } from './types';
import * as S from './styleds';

const Dialog: React.FC<DialogModal> = ({ children, textConfirm, width = '600px' }) => {
  return (
    <Modal>
      <S.DialogModal width={width}>
        <S.DialogCloseButton name="closeButton">
          <BsXLg />
        </S.DialogCloseButton>
        <S.Container>
          <S.DialogText>{children}</S.DialogText>
          <S.DialogButton>{textConfirm}</S.DialogButton>
        </S.Container>
      </S.DialogModal>
    </Modal>
  );
};

export default Dialog;
