import styled from 'styled-components';
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
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  transform: skewY(65deg);
  background-color: hsl(232deg 16% 19%);
`;

export const Image = styled.img.attrs({ src: imageSrc })`
  position: absolute;
  right: 0;
  width: 50vw;
  opacity: 0.1;
  filter: blur(1px);
`;

export const Logo = styled(LogoSVG).attrs({ color: '#FFF' })`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
