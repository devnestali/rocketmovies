/* import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
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

  }

  .tags {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 1.6rem;
    border-radius: .8rem;
  }
`;

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 4rem auto;
  overflow-y: auto;

  > header {
    display: grid;
    margin-bottom: 4rem;

    h1 {
      padding-top: 2.5rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  section h3{
    font-size: 2rem;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  .buttons {
    margin-top: 4rem;
  }
`; */