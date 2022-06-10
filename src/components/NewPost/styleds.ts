import Card from 'components/Card';
import styled from 'styled-components';
import clipboard from 'assets/svgs/clipboard.svg';

export const Wrapper = styled(Card)`
  padding: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
`;

export const Header = styled.div`
  height: 56px;
  padding-top: 24px;
  padding-left: 24px;
  border-bottom: 1px solid #f4f4f4;
`;

export const TitleHeader = styled.h3`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #181818;
`;

export const Content = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row;
  flex: 1;
  padding: 0 24px;
  min-height: 79px;
  align-items: center;
`;

export const TextArea = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  resize: none;
  align-self: stretch;
  padding: 24px 0;
  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: rgba(24, 24, 24, 0.2);
  }
`;

export const IconButton = styled.div`
  display: flex;
  cursor: pointer;
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

export const ClipBoard = styled.img.attrs({ src: clipboard })`
  opacity: 0.16;
  cursor: pointer;
`;
