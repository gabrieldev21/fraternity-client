import React from 'react';

import Modal from '../Modal';

import { Container, DialogButton, DialogText } from './style';

export interface DialogModal {
  message: string;
}

const Dialog = ({ message }: DialogModal) => {
  return (
    <Modal
      style={{
        width: 375,
        height: 140,
        borderRadius: 8,
        position: 'relative',
        margin: 'auto',
      }}
    >
      <Container>
        <DialogText>{message}</DialogText>
        <DialogButton>Ok</DialogButton>
      </Container>
    </Modal>
  );
};

export default Dialog;
