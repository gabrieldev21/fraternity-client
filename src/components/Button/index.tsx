import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 166px;
  padding: 0.375rem 0.75rem;
`;

export default ButtonStyled;
