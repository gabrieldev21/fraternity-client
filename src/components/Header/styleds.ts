import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoSVG from 'components/Logo';

export const Wrapper =
  styled.div <
  { isScrolled: boolean } >
  `
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  height: 70px;
  padding: 0 24px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  box-shadow: ${({ isScrolled }) => isScrolled && '0 10px 6px -6px #0003'};
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textMain};
  svg {
    fill: ${(props) => props.theme.colors.textMain};
  }
`;

export const WrapperItens = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const SplitLine = styled.hr`
  height: 65px;
  border: 0.1px solid ${({ theme }) => theme.colors.textMain};
  opacity: 0.6;
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
  width: 310px;
  display: flex;
  justify-content: center;
  margin-left: 8px;
`;

export const UserText = styled.div`
  width: 310px;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-left: 24px;
`;

export const Text = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textMain};
`;

export const TextRole = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.textMain};
`;

export const Avatar = styled.img`
  border: 10px solid #ffffff;
  width: 32px;
  height: 24px;
  border-radius: 100%;
  object-fit: contain;
  background: #fff;
`;
