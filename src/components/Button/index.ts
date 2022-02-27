import styled from 'styled-components';

const Button = styled.button`
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: #1d90f4;
  border-radius: 32px;
  padding: 24px 40px;
  transition: all 0.4s ease-out;
  font-size: 16px;
  &:hover {
    background-color: #1c90f4;
    opacity: 0.6;
  }
  &:disabled {
    background-color: #727b88;
    cursor: not-allowed;
    opacity: 1;
  }
`;

export default Button;
