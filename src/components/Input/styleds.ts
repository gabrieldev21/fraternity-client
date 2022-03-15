import styled from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper =
  styled.div <
  WrapperProps >
  `
  position: relative;
  background-color: ${({ theme }) => theme.colors.input.background};
  padding: 16px 24px;
  padding-top: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ error, theme }) => (error ? theme.colors.error : theme.colors.input.background)};
  svg {
    color: ${({ error, theme }) => (error ? theme.colors.error : theme.colors.textMain)};
  }
  label{
    color: ${({ error, theme }) => (error ? theme.colors.error : theme.colors.textSecondary)};
  }
  &:focus-within {
    background-color: ${({ theme }) => theme.colors.input.backgroundSecondary};
    border-color: ${({ theme }) => theme.colors.main};
    label {
      color: ${({ theme }) => theme.colors.main};
    }
    svg {
      color: ${({ theme }) => theme.colors.main};
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
    color: ${({ theme }) => theme.colors.textMain};
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

export const IconContainer = styled.div`
  cursor: pointer;
`;
