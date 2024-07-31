import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    min-width: 113.7rem;
    margin: 4rem auto 0;
    overflow-y: auto;

    > a {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      padding-bottom: 2.4rem;
    }
  }
`;