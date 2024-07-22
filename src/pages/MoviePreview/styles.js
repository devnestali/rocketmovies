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

    .title {
      display: flex;
      align-items: center;
      
      > h1 {
        font-size: 3.6rem;
        font-weight: 600;
        letter-spacing: .1rem;
        margin-right: 1.9rem;
      }
    }

    .aboutWriter {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-top: 2.5rem;

      .author {
        display: flex;
        align-items: center;
        gap: .8rem;

        > img {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
        }
      }

      .timeWasWritten {
        > p {
          display: flex;
          align-items: center;
          gap: .8rem;

          > svg {
            color: ${({ theme }) => theme.COLORS.PINK};
          }
        }
      }
    }
  }
`;