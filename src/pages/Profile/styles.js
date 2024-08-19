import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.GRAY_700};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;

  }
`;