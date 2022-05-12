import React from 'react';
import { BsXLg } from 'react-icons/bs';

import Modal from 'components/Modal';
import { IDialog } from './types';
import * as S from './styleds';

const Dialog: React.FC<IDialog> = ({ onClose, isOpen, hideCloseButton = false, children, width = '600px' }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal>
      <S.DialogModal width={width}>
        {!hideCloseButton && (
          <S.DialogCloseButton>
            <BsXLg onClick={() => onClose()} />
          </S.DialogCloseButton>
        )}
        <S.Container>{children}</S.Container>
      </S.DialogModal>
    </Modal>
  );
};

export default Dialog;
