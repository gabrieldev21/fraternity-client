import styled, { keyframes } from 'styled-components';
import logoSrc from 'assets/images/logo_transparent.png';

const rotate = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.8);
  }
  100%{
    transform: scale(1);
  }
`;

const LoadingLogo = styled.img.attrs({
  src: logoSrc,
})`
  width: 150px;
  transform: scale(1);
  animation: ${rotate} 2s linear infinite;
  align-self: center;
  flex: 1;
  align-self: center;
  object-fit: contain;
`;

export default LoadingLogo;
