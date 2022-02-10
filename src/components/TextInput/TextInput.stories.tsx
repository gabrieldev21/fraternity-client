import React from 'react';
import { MdPerson, MdLockOutline } from 'react-icons/md';
import TextInput from '.';

export default {
  title: 'TextInput',
  component: TextInput,
};

export const Inputs = () => (
  <div
    style={{
      background: '#282828',
      width: 300,
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 100,
      flexDirection: 'column',
    }}
  >
    <TextInput color="#FFF" type="email" label="E-mail" icon={MdPerson} />
    <TextInput color="#FFF" type="password" label="Senha" icon={MdLockOutline} />

    <TextInput color="#FFF" type="email" label="E-mail" error="E-mail incorreto" icon={MdPerson} />
  </div>
);
