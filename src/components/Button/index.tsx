import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 144px;
  width: 100%;
  height: 52px;
  transition: all 0.4s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: #000;
  }
`;

export default ButtonStyled;
