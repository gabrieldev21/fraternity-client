import styled from 'styled-components';

const LinkButton = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) => props.theme.colors.main};
  margin-top: 24px;
  display: block;
  &:hover {
    color: ${(props) => props.theme.colors.mainLight};
  }
`;

export default LinkButton;
