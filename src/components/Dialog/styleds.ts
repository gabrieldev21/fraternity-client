import styled from 'styled-components';

import Button from 'components/Button';

export const DialogCloseButton = styled(Button)`
  background-color: transparent;
  position: absolute;
  padding: 2px;
  border-radius: 6px;
  top: 12px;
  right: 12px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainLight};
  }
`;

export const DialogModal = styled.div`
  width: 450px;
  height: 150px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.input.backgroundSecondary};
  position: relative;
`;

export const DialogText = styled.div`
  margin-top: 6px;
  font-size: 1.4rem;
  margin: 6px 70px;
  display: flex;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const DialogButton = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  padding: 8px 28px;
  font-size: 16px;
  transition: all 0.4s ease-out;
  color: ${({ theme }) => theme.colors.textMain};
  background-color: ${({ theme }) => theme.colors.main};
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainLight};
  }
`;

export const Container = styled.div`
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 36px;
`;
