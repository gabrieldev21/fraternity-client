import React from 'react';
import { BsPersonLinesFill, BsFillEyeFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import Input from '.';

export default {
  title: 'Input',
  component: Input,
};

export const Inputs = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      width: 300,
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 100,
      flexDirection: 'column',
    }}
  >
    <Input type="text" name="name" label="Full name" icon={<BsPersonLinesFill />} />
    <br />
    <br />
    <Input type="password" name="password" label="Password" icon={<BsFillEyeFill />} />
    <br />
    <br />
    <Input type="email" name="email" label="Email" error="Error message" icon={<MdEmail />} />
  </div>
);
