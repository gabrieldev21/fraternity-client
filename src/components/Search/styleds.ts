import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 250px;
  min-width: 250px;
  align-items: center;
  position: relative;
  padding: 0 28px;
  border-left: 1px solid ${({ theme }) => theme.colors.textMain};
  border-right: 1px solid ${({ theme }) => theme.colors.textMain};

  input {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.textMain};
    outline: none;
    margin-left: 6px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.textMain};
      opacity: 0.9;
    }
  }

  svg {
    width: 32px;
    height: 35px;
    color: ${({ theme }) => theme.colors.textMain};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.textMain};
  position: absolute;
  padding: 16px 0;
  top: 100%;
  left: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Avatar = styled.img`
  height: 42px;
  width: 50px;
  border-radius: 26px;
  margin: 0 16px 0 24px;
  object-fit: contain;
`;

export const UserContainer = styled(Link).attrs({ to: '/profile/gabriel' })`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  color: #181818;
  text-decoration: none;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  margin: 0;
`;
