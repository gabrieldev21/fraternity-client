import styled from 'styled-components';

export const DialogText = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 1.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const CloseModal = styled.div`
  flex: none;
  flex-direction: row-reverse;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const DialogButton = styled.button`
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMain};
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 12px;
  padding: 8px 24px;
  transition: all 0.4s ease-out;
  font-size: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainLight};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .CloseModal {
    display: flex;
    align-self: flex-end;
  }
`;
