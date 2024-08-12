import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  resize: none;

  border-radius: 1rem;
  padding: 1.9rem 2rem;
  margin-bottom: 4rem;
`;