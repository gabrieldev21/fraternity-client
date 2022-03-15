import React from 'react';

import Modal from 'components/Modal';

import { BsXLg } from 'react-icons/bs';
import * as S from './styleds';

export interface DialogModal {
  width?: string;
  textConfirm: string;
}

const Dialog: React.FC<DialogModal> = ({ children, textConfirm, width }) => {
  return (
    <Modal>
      <S.DialogModal width={width}>
        <S.DialogCloseButton>
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

Dialog.defaultProps = { width: '600px' };

export default Dialog;
