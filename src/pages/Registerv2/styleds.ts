import styled from 'styled-components';
import { Link } from 'react-router-dom';

import imageSrc from 'assets/images/background-enter.jpg';
import LogoSVG from './Logo';

export const Wrapper = styled.div`
  background-color: hsl(232deg 16% 19%);
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const CutImage = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: hsl(232deg 16% 19%);
  background: rgb(41, 45, 56);
  background: linear-gradient(
    45deg,
    rgba(41, 45, 56, 1) 0%,
    rgba(41, 43, 56, 1) 65%,
    rgba(41, 43, 56, 0.5979342420561975) 100%
  );
`;

export const Image = styled.img.attrs({ src: imageSrc })`
  position: absolute;
  right: 0;
  width: 50vw;
  filter: blur(1px);
`;

export const Logo = styled(LogoSVG).attrs({ color: '#FFF' })`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin: 0;
`;

export const LinkStyled = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: hsl(210deg 66% 33%);
  font-weight: 600;
`;
export const Subtitle = styled.h2`
  color: #727b88;
  font-size: 24px;
  font-weight: normal;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 40px;
  position: relative;
  z-index: 1;
`;
