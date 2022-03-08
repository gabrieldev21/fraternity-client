import styled from 'styled-components';

export const DialogText = styled.div`
  font-size: 1.3rem;
  margin-top: 8px;
  margin-bottom: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const DialogButton = styled.button`
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMain};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 12px;
  padding: 8px 24px;
  margin-top: 32px;
  margin-bottom: 6px;
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
  justify-content: center;
  text-align: center;
`;
