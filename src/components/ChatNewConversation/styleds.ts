import Card from 'components/Card';
import styled from 'styled-components';

export const CardStyled = styled(Card)`
  padding: 0;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const Button = styled.button`
  padding: 8px;
  width: 230px;
  height: 32px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.main};
  color: #fff;
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;
