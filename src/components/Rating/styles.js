import styled from "styled-components";

export const Container = styled.div`

  > input[type="radio"] {
    height: 1px;
    width: 1px;
    position: absolute;
    transform: translate(50%, 50%);
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