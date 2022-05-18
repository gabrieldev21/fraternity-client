import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 250px;

  height: 45px;
  background: ${({ theme }) => theme.colors.textMain};
  border: 0.5px solid ${({ theme }) => theme.colors.input.background};
  border-radius: 1.2rem;
  padding: 0 16px;
  margin: 16px;
`;

export const Image = styled.div`
  align-self: center;
  svg {
    margin-top: 6px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.textMain};
  color: ${({ theme }) => theme.colors.input.background};
  outline: none;
  margin-left: 8px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.input.background};
  }
`;
