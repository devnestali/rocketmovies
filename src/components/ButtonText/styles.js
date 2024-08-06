import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: .8rem;
  
  background: none;
  border: none;
  padding-bottom: 2.4rem;
  color: ${({ theme }) => theme.COLORS.PINK};
`;
