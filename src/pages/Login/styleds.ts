import styled from 'styled-components';
import Card from 'components/Card';
import backgroundSrc from 'assets/images/background-login.jpg';
import logoSrc from 'assets/images/logo_transparent.png';

export const Wrapper = styled.div`
  background-image: url(${backgroundSrc});
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled(Card)`
  border-radius: 30px;
  width: 374px;
  height: 500px;
  background-color: ${(props) => props.theme.colors.orange};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  button {
    margin-top: 53px;
  }
`;

export const LogoTransparent = styled.img.attrs({
  src: logoSrc,
})`
  width: 240px;
  margin-bottom: 9px;
`;

export const Fade = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadein 2s;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
