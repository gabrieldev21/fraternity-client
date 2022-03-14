import React from 'react';

import Button from 'components/Button';
import Dialog from './index';

export default {
  title: 'DialogBook',
  component: Dialog,
};

export const Modal = () => (
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
    <Dialog>Algo de errado não está certo</Dialog>
    <Button>abrir</Button>
  </div>
);
