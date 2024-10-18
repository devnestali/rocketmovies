import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.BLACK_700};

  border: ${({ theme, isnew }) => isnew ? `2px dashed ${theme.COLORS.GRAY_800}` : "none"};
  border-radius: 1rem;
  
  width: fit-content;

  > button {
    border: none;
    background-color: transparent;

    display: grid;
    place-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_800};
      font-size: 2.5rem;
    }
  }

  > input {
    width: 11rem;
    flex-grow: 1;
    background-color: transparent;

    padding: 0 .8rem;
    
    border: none;
    outline: none;

    cursor: ${({ isnew }) => !isnew && "not-allowed"};
  }
`;