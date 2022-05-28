import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import LogoSVG from 'components/Logo';

export const Wrapper =
  styled.div <
  { isScrolled: boolean } >
  `
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  height: 70px;
  position: sticky;
  top: 0;
  display: flex;  
  justify-content: space-evenly;
  align-items: center;
  box-shadow: ${({ isScrolled }) => isScrolled && '0 10px 6px -6px #0003'};
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textMain};
  svg {
    fill: ${(props) => props.theme.colors.textMain};
  }
`;

const selectedCSS = css`
  background-color: ${({ theme }) => theme.colors.main};
`

export const LinkItens = styled(Link) <
// eslint-disable-next-line prettier/prettier
{ isActive?: boolean } >`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 90px;
height: 70px;
cursor: pointer;
text-decoration: none;
color: ${(props) => props.theme.colors.textMain};
svg {
  fill: ${(props) => props.theme.colors.textMain};
}
&:hover {
 ${selectedCSS}
}
${({isActive}) => isActive && selectedCSS}

`;

export const SplitLine = styled.hr`
  height: 65px;
  border: 0.1px solid ${({ theme }) => theme.colors.textMain};
  opacity: 0.6;
  margin: 0 8px;
`;

export const Logo = styled(LogoSVG)`
  width: 45px;
  height: 59px;
  margin-bottom: 8px;
  svg {
    fill: ${(props) => props.theme.colors.textMain};
  }
`;

export const User = styled.div`
  width: 330px;
  display: flex;
  margin-left: -24px;
  justify-content: center;
`;

export const UserText = styled.div`
  width: 330px;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-left: 24px;
`;

export const Text = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.textMain};
`;

export const TextRole = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.textMain};
`;

export const Avatar = styled.img`
  height: 42px;
  width: 50px;
  border-radius: 26px;
  object-fit: contain;
`;
