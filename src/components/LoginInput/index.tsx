/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/display-name */

import React, { useRef } from 'react';
import * as S from './styleds';
import { InputProps } from './types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, id, label, icon, type = 'text', error, ...others }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <S.Wrapper error={error}>
        <S.ContainerInput>
          <label htmlFor={id ?? name}>{label}</label>
          <input ref={ref || inputRef} id={id ?? name} name={name} type={type} {...others} />
        </S.ContainerInput>
        <S.ErrorMessage>{error}</S.ErrorMessage>
        {icon}
      </S.Wrapper>
    );
  },
);

export default Input;
