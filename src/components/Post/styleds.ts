import Card from 'components/Card';
import styled from 'styled-components';
import menuIcon from 'assets/svgs/menu-post.svg';

export const Wrapper = styled(Card)`
  padding: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
`;

export const Header = styled.div`
  padding: 24px;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuIcon = styled.img.attrs({ src: menuIcon, alt: 'Menu Post' })`
  cursor: pointer;
  height: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 24px;
  padding-left: 40px;
  border-bottom: 1px solid #f4f4f4;
`;

export const Footer = styled.div`
  min-height: 49px;
  padding: 0 40px;
  display: flex;
`;


// eslint-disable-next-line prettier/prettier
export const ItemLeft = styled.div<{isActive?: boolean}>`
  border-right: 1px solid #f4f4f4;
  align-self: strech;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 123px;
  cursor: pointer;
  svg {
    fill: ${({isActive}) => isActive? '#0275b1': '#fff' };
  }

  span {
    margin-left: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #181818;
  }

  &:hover svg {
    fill: #0275b1;
  }
`;

export const ItemRight = styled.div`
  justify-self: flex-end;
  cursor: pointer;
  padding-left: 32px;
  display: flex;
  align-items: center;
  margin-left: auto;
  border-left: 1px solid #f4f4f4;

  span {
    margin-left: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
  }

  &:hover {
    svg {
      fill: #0275b1;
    }
  }
  &:hover {
    svg {
      fill: #0275b1;
    }
  }
`;

export const UserContainer = styled.div`
  margin-bottom: 16px;
  display: inline-flex;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
`;

export const Role = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: #181818;
`;

export const Avatar = styled.img`
  width: 71.45px;
  height: 52px;
  border-radius: 26px;
  object-fit: contain;
`;

export const TextContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #181818;
`;

export const MediaContent = styled.img`
  height: 300px;
  object-fit: cover;
`;
