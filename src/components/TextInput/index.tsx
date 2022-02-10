/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import useTheme from 'hooks/useTheme';
import * as S from './styleds';
import { ITextInput } from './types';

const TextInput = React.forwardRef<HTMLInputElement, ITextInput>(
  ({ label, icon, color, error, placeholder = ' ', ...others }, ref) => {
    const theme = useTheme();
    const Icon = icon;

    return (
      <S.Wrapper error={Boolean(error)} color={color}>
        <input ref={ref} {...others} placeholder={placeholder} />
        <S.Label>{label}</S.Label>
        {icon && <Icon size={24} color={error ? theme.colors.error : color} />}
        <S.TextInformation>{error}</S.TextInformation>
      </S.Wrapper>
    );
  },
);

export default TextInput;
