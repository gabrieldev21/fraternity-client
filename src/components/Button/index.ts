import styled, { css } from 'styled-components';

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const primary = css`
  color: ${({ theme }) => theme.colors.textMain};
  background-color: ${({ theme }) => theme.colors.main};
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainLight};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`;

const secondary = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.textMain};
  color: ${({ theme }) => theme.colors.textMain};
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    border-color: ${({ theme }) => theme.colors.main};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    border-color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`;

const Button =
  styled.button <
  IButton >
  `
  border: none;
  cursor: pointer;
  border-radius: 32px;
  padding: 24px 40px;
  transition: all 0.4s ease-out;
  font-size: 16px;
  font-weight: 600;
 ${(props) => props.variant === 'primary' && primary}
 ${(props) => props.variant === 'secondary' && secondary}
`;

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
