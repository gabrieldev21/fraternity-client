import React from 'react';
import Dialog from './index';

export default {
  title: 'DialogBook',
  component: Dialog,
};

export const Modal = () => (
  <div>
    <Dialog message="Had something wrong " />
  </div>
);
