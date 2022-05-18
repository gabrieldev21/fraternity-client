import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  position: relative;
  overflow: auto;
`;
