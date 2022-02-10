import styled from 'styled-components';
import { IWrapper } from './types';

export const Label = styled.span`
  position: absolute;
  font-size: 16px;
  bottom: 16px;
  left: 0;
  transition: all 0.3s ease-out;
`;
export const TextInformation = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: -16px;
`;

export const Wrapper = styled.label<IWrapper>`
  cursor: text;
  position: relative;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid ${(props) => (props.error ? props.theme.colors.error : props.color)};
  margin-bottom: 8px;
  svg {
    position: absolute;
    bottom: 16px;
    right: 0;
  }
  input {
    outline: 0;
    background-color: transparent;
    color: ${(props) => props.color};
    border: none;
    position: absolute;
    bottom: 16px;
    left: 0;
    width: calc(100% - 50px);
    font-size: 16px;
  }
  ${Label}, ${TextInformation} {
    color: ${(props) => (props.error ? props.theme.colors.error : props.color)};
  }

  & input:focus + ${Label}, & input:not(:placeholder-shown) + ${Label} {
    font-size: 13px;
    bottom: 48px;
  }
`;
