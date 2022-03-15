import React from 'react';
import Button from '.';

export default {
  title: 'LoginButton',
  component: Button,
};

export const ButtonPrimary = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      width: 300,
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 100,
    }}
  >
    <Button variant="primary">Create account</Button>
    <br />
    <Button disabled>Disabled Button</Button>
  </div>
);

export const ButtonSecondary = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      width: 300,
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 100,
    }}
  >
    <Button variant="secondary">Create account</Button>
    <br />
    <Button variant="secondary" disabled>
      Disabled Button
    </Button>
  </div>
);
