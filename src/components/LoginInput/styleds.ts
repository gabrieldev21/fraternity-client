import styled from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper =
  styled.div <
  WrapperProps >
  `
  position: relative;
  background-color: hsl(227deg 16% 23%);
  padding: 16px 24px;
  padding-top: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.error ? props.theme.colors.error : 'hsl(227deg 16% 23%)')};
  svg {
    color: ${(props) => (props.error ? props.theme.colors.error : '#fff')};
  }
  label{
    color: ${(props) => (props.error ? props.theme.colors.error : '#727b88')};
  }
  &:focus-within {
    background-color: #3d404a;
    border-color: #1c90f4;
    label {
      color: #1c90f4;
    }
    svg {
      color: #1c90f4;
    }
  }
`;
export const ContainerInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-bottom: 8px;
  label {
    font-size: 14px;
  }
  input {
    outline: 0;
    background-color: transparent;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error};
  position: absolute;
  bottom: 8px;
  font-size: 12px;
`;
