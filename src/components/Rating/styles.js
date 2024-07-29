import styled from "styled-components";

export const Container = styled.div`
  
  > input[type="radio"] {
    display: none;
  }

  > label {
    position: relative;
    margin-right: 1rem;
    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK };
    }
  }
`;