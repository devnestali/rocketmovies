import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  main {
    grid-area: content;
    padding: 0 12.3rem;
    width: 100vw;
    overflow-y: auto;

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
  }
`;