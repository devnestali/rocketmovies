import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: .8rem 1.6rem;
  border-radius: .5rem;
  margin-right: .8rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE };
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
`;