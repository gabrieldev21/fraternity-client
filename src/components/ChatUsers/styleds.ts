import Card from 'components/Card';
import styled from 'styled-components';

export const CardStyled = styled(Card)`
  padding: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
`;

export const TitleHeader = styled.h3`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #181818;
`;

export const Header = styled.div`
  height: 56px;
  padding-top: 24px;
  padding-left: 24px;
  border-bottom: 1px solid #f4f4f4;
`;

export const Body = styled.div`
  overflow-y: auto;
`;

// eslint-disable-next-line prettier/prettier
export const Item = styled.div<{active?:boolean}>`
  padding: 16px 24px;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  cursor: pointer;
  position: relative;
  opacity: ${({ active }) => (active ? '0.6' : '1')};
  &:hover {
    opacity: 0.6;
  }
`;

export const Avatar = styled.img`
  object-fit: contain;
  border-radius: 26px;
  width: 52px;
  height: 52px;
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
`;

export const Message = styled.p`
  color: #181818;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;

export const UserContent = styled.div`
  width: 100%;
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SelectedBar = styled.div`
  position: absolute;
  background: #1c90f4;
  width: 10px;
  height: 100%;
  left: 0;
  top: 0;
`;
