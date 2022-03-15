import styled from 'styled-components';

import Button from 'components/Button';

interface IDialogModal {
  width: string;
}

export const DialogCloseButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMain};
  position: absolute;
  padding: 2px;
  border-radius: 6px;
  top: 12px;
  right: 12px;
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
  background-color: ${({ theme }) => theme.colors.input.backgroundSecondary};
`;

export const DialogText = styled.div`
  margin-top: 6px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const DialogButton = styled(Button)``;

export const Container = styled.div`
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 36px;
`;
