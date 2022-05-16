import styled from 'styled-components';
import { Link } from 'react-router-dom';

import imageSrc from 'assets/images/background-enter.jpg';
import LogoSVG from 'components/Logo';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const CutImage = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.backgroundGradient};
`;

export const Image = styled.img.attrs({ src: imageSrc })`
  position: absolute;
  right: 0;
  width: 50vw;
  filter: blur(1px);
`;

export const Logo = styled(LogoSVG)`
  fill: ${({ theme }) => theme.colors.textMain};
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 3rem;
  margin: 0;
`;

export const LinkStyled = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainLight};
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;
export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 24px;
  font-weight: normal;
`;

export const Container = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadein 0.8s;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 40px;
  position: relative;
  z-index: 1;
`;

export const FormWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    flex: 1;
    margin-right: 8px;
    margin-bottom: 16px;
  }
`;

export const ButtonRow = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  * {
    width: 280px;
    margin: 16px;
  }
`;
