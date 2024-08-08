import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  main {
    padding: 0 12.3rem;
    width: 100vw;

    .mainTitle {
      display: flex;
      justify-content: space-between;
      margin: 4.5rem 0;

      > h3 {
        font-size: 3.2rem;
        font-weight: 400;
      }

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        padding: 1.35rem 3.2rem;
        border-radius: .8rem;
      }
    }

    .filmsContent {
      width: 100%;
      height: 22.3rem;
      padding: 3.2rem;
      border-radius: .8rem;
      background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }
`;