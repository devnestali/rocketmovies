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

  @media (max-width: 768px) {
    grid-template-rows: 7rem 1fr;
  }

  > main {
    grid-area: content;
    width: 100%;

    overflow: hidden;

    > .wrapper {
      overflow-y: auto;

      height: 100%;

      padding-top: 5rem;
      padding-bottom: 5rem;

      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
    }
  }
`;

export const MainTop = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

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

export const Notes = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 3.8rem;

  overflow-y: auto;

  padding-right: .8rem;

  h2 {
    text-align: center;
  }

  &::-webkit-scrollbar {
    width: .8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_800 };
    border-radius: 8rem;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;