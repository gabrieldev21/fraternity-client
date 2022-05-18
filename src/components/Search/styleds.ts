import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 250px;

  height: 40px;
  background: ${({ theme }) => theme.colors.textSecondary};
  border: 0.5px solid ${({ theme }) => theme.colors.input.background};
  border-radius: 1.2rem;
  padding: 0 16px;
  align-items: center;

  input {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.textMain};
    outline: none;
    margin-left: 6px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.textMain};
      opacity: 0.9;
    }
  }

  svg {
    width: 22px;
    height: 25px;
    color: ${({ theme }) => theme.colors.textMain};
  }
`;
