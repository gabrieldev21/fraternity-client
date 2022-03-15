import React, { useMemo, useRef, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import * as S from './styleds';
import { InputProps } from './types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, id, label, icon, type = 'text', error, ...others }, ref) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const renderIcon = useMemo(() => {
      if (!isPassword) return icon;
      if (showPassword) return <BsFillEyeSlashFill />;
      return <BsFillEyeFill />;
    }, [isPassword, icon, showPassword]);

    const handleClickIcon = () => {
      if (isPassword) {
        setShowPassword(!showPassword);
      }
    };

    const handleClickContainer = () => {
      labelRef.current?.click();
    };

    return (
      <S.Wrapper onClick={handleClickContainer} error={error}>
        <S.ContainerInput>
          <label ref={labelRef} htmlFor={id ?? name}>
            {label}
          </label>
          <input ref={ref} id={id ?? name} name={name} type={isPassword && showPassword ? 'text' : type} {...others} />
        </S.ContainerInput>
        <S.ErrorMessage>{error}</S.ErrorMessage>
        <S.IconContainer role="button" onClick={handleClickIcon}>
          {renderIcon}
        </S.IconContainer>
      </S.Wrapper>
    );
  },
);

Input.displayName = 'Input';

export default Input;
