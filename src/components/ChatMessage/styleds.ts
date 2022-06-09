import Card from 'components/Card';
import styled from 'styled-components';

import clipboard from 'assets/svgs/clipboard.svg';

export const Container = styled(Card)`
  min-height: 475px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  height: 40px;
`;

export const Username = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #181818;
  margin-left: 24px;
`;

export const Preview = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  flex: 1;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  opacity: 0.6;
`;

export const Footer = styled.div`
  display: flex;
  padding: 24px;
  margin-top: auto;
  border-top: 1px solid #f4f4f4;
  max-height: 78px;
  gap: 24px;
`;

export const TextArea = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: rgba(24, 24, 24, 0.2);
  }
`;

export const ClipBoard = styled.img.attrs({ src: clipboard })`
  opacity: 0.16;
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  background: #1c90f4;

  img {
    width: 16px;
    height: 16px;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
`;

export const SendMessage = styled.div`
  position: relative;
  word-wrap: break-word;
  margin-left: 40px;
  max-width: 350px;
  background: #1c90f4;
  padding: 16px 24px;
  border-radius: 4px;

  &:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 12px solid transparent;
    border-right: 12px solid #1c90f4;
    border-bottom: 12px solid #1c90f4;
    border-top: 12px solid transparent;
    left: -21px;
    bottom: 0;
  }
`;

export const TextMessage = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
`;

export const ReceivedMessage = styled.p`
  max-width: 350px;
  padding: 16px 24px;
  margin-left: auto;
  border-radius: 4px;
  background: #e9f0f8;
`;

export const Avatar = styled.img`
  height: 42px;
  width: 50px;
  border-radius: 26px;
  margin-right: 32px;
  object-fit: contain;
`;

export const ReceivedWrapper = styled.div`
  width: 100%;
  display: flex;

  justify-items: flex-end;
  align-items: center;
  gap: 16px;
`;
