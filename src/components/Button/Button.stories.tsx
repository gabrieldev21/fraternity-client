import React from 'react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const ButtonPrimary = () => (
  <div
    style={{
      background: '#282828',
      width: 300,
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 100,
    }}
  >
    <Button>Primary</Button>
  </div>
);
