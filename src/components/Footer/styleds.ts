import styled from 'styled-components';

import LogoSVG from 'components/Logo';
import Button from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 215px;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Navigations = styled.div`
  margin-top: 32px;
`;

export const NavItem = styled.div`
  font-size: 12px;
  opacity: 0.8;
  margin: 8px 0 24px 0;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const SecondNavigations = styled.div`
  margin-top: 58px;
`;

export const Items = styled.div`
  font-size: 12px;
  opacity: 0.8;
  margin: 16px 96px 0 0;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const LogoFraternity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 36px 120px 50px 88px;
  color: ${(props) => props.theme.colors.textMain};
`;

export const Logo = styled(LogoSVG)`
  width: 77px;
  height: 89px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.textMain};
  svg {
    fill: ${(props) => props.theme.colors.textMain};
  }
`;

export const FastAcess = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.textMain};
  opacity: 0.9;

  & > * {
    margin: 8px 0;
  }
`;

export const QuestionButton = styled(Button)`
  height: 32px;
  width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  margin: 24px 96px 0 0;
  border-radius: 8px;

  img {
    height: 20px;
    width: 20px;
    margin: 0 0 4px 55px;
    color: ${(props) => props.theme.colors.textMain};
  }
`;

export const ConfigButton = styled(Button)`
  height: 32px;
  width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-right: 80px;

  img {
    height: 22px;
    width: 22px;
    margin: 0 0 4px 13px;
  }
`;

export const Language = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.textMain};
  opacity: 0.9;
`;

export const SelectLanguage = styled.select`
  height: 40px;
  width: 270px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding-left: 24px;
  font-size: 12px;
  opacity: 0.9;
  color: ${(props) => props.theme.colors.main};

  option {
    margin-left: 40px;
  }
`;
