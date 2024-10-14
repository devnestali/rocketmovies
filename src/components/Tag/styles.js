import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;

  padding: .5rem 1.6rem;
  
  background-color: ${({ theme }) => theme.COLORS.BLACK_600 };

  border-radius: .8rem;

  margin-right: .8rem;
`;