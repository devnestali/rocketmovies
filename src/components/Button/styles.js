import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, deleteButton}) => deleteButton ? theme.COLORS.BLACK : theme.COLORS.PINK};
  color: ${({ theme, deleteButton}) => deleteButton ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_700};

  height: 5.6rem;
  
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;