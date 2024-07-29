import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2.5rem 0 4rem 0;

  div {
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
    
`;