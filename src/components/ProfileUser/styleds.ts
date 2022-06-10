import styled, { css } from 'styled-components';
import Card from 'components/Card';
import Button from 'components/Button';

export const CardStyled = styled(Card)`
  position: relative;
`;

export const Banner = styled.img`
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Actions = styled.div`
  width: 100%;
  height: 36px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 72px;
`;

export const IconButton = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 10px 30px rgba(113, 123, 133, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  margin-left: 16px;
  cursor: pointer;
  span {
    margin-left: 16px;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;

export const TextLoginMessage = styled.div`
  color: #181818;
  font-size: 20px;
  text-align: center;
`;

export const MessageButton = styled(Button)`
  margin-top: 8px;
  padding: 16px 40px;
`;

IconButton.defaultProps = {
  role: 'button',
};

export const Content = styled.div`
  display: flex;
`;

export const ContentText = styled.div`
  margin-top: 56px;
  margin-left: 32px;
  flex: 1;
`;

export const Avatar = styled.img`
  position: relative;
  border: 10px solid #ffffff;
  height: 170px;
  border-radius: 100%;
  width: 238.72px;
  height: 170px;
  object-fit: contain;
  background: #fff;
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

export const Location = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-left: 296px;
  display: inline-flex;
  span {
    margin-left: 8px;
  }
`;

const defaultButton = css`
  margin-top: 32px;
  padding: 8px;
  width: 240px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

export const ButtonPrimary = styled.button`
  ${defaultButton}
  background: ${(props) => props.theme.colors.main};
  margin-right: 24px;
  color: #fff;
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;

export const ButtonSecondary = styled.button`
  ${defaultButton}
  background: #FFFFFF;
  border: 1px solid ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.main};
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;
