import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;

  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 4rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 6px;
  }
`;