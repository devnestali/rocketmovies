import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 1fr;
  grid-template-areas: 
    "header"
    "content";

  > main {
    grid-area: content;
    width: 100%;

    overflow: hidden;

    > .wrapper {
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK_800 };
        border-radius: 6px;
      }

      height: 100%;

      padding-top: 5rem;
      padding-bottom: 5rem;

      display: flex;
      flex-direction: column;
    }
  }
`;

export const MainTop = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 3.2rem;
    font-weight: 400;
  }

  > button {
    background: transparent;
  }
`;

export const ButtonAdd = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.PINK_800};
  color: ${({ theme }) => theme.COLORS.BLACK_800};
  
  padding: 1.4rem 3.2rem;
  border-radius: .8rem;

  > svg {
    font-size: 2rem;
  }
`;