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

    > a {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      padding-bottom: 2.4rem;
    }

    div {
      display: flex;
      align-items: center;
      
      > h1 {
        font-size: 3.6rem;
        font-weight: 600;
        letter-spacing: .1rem;
        margin-right: 1.9rem;
        
      }
    }
  }
`;