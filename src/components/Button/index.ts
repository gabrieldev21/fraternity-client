import styled from 'styled-components';

const Button = styled.button`
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMain};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 32px;
  padding: 24px 40px;
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

export default Button;
