import styled from 'styled-components';

import { IDialogModal } from './types';

export const DialogCloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textMain};
  padding: 2px;
  border-radius: 6px;
  position: absolute;
  top: 14px;
  right: 14px;
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const DialogModal =
  styled.div <
  IDialogModal >
  `
  width: ${(props) => props.width};
  min-height: 150px;
  padding: 32px;
  border-radius: 8px;
  position: relative;
  background-color: ${({ theme, background }) => background || theme.colors.input.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textMain};  
`;

export const Container = styled.div`
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 36px;
`;
