import styled from "styled-components";

export const Container = styled.a`
  width: 7rem;
  
  display: flex;
  align-items: center;
  gap: .8rem;
  
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};
`;
