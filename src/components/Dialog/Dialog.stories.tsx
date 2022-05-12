import Button from 'components/Button';
import React, { useState } from 'react';

import Dialog from './index';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        background: 'rgb(41, 45, 56)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} width="600px" hideCloseButton>
        <p style={{ textAlign: 'center' }}>Este documento teve um erro</p>
        <Button onClick={() => setIsOpen(false)}>OK</Button>
      </Dialog>
      <button onClick={() => setIsOpen(true)} type="button">
        Abrir
      </button>
    </div>
  );
};
