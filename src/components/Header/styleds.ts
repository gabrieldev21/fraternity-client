import styled from 'styled-components';
import LogoSVG from 'components/Logo';
import { Link } from 'react-router-dom';

export const Wrapper =
  styled.div <
  { isScrolled: boolean } >
  `
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  height: 60px;
  position: sticky;
  top: 0;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ isScrolled }) => isScrolled && '0 10px 6px -6px #0003'};
`;

export const Item = styled(Link)`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.colors.textMain};
  }
`;

export const Logo = styled(LogoSVG)`
  width: 40px;
  height: 40px;
`;
