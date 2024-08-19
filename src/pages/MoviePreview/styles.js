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

    h1 {
      padding-top: 2.5rem;
    }
  }
`;