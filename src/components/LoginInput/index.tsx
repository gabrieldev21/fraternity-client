/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import * as S from './styleds';
import { LoginInputProps } from './types';

const LoginInput: React.FC<LoginInputProps> = ({ name, id, className, label, icon, type = 'text', error }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef?.current?.focus();
  };

  return (
    <S.Wrapper onClick={handleClick} error={error}>
      <S.ContainerInput>
        <label htmlFor={id ?? name}>{label}</label>
        <input ref={inputRef} type={type} id={id ?? name} name={name} className={className} />
      </S.ContainerInput>
      <S.ErrorMessage>{error}</S.ErrorMessage>
      {icon}
    </S.Wrapper>
  );
};

export default LoginInput;
