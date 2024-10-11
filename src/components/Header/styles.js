import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  padding: 3rem 0;
  border-bottom: 1px solid ${({ theme}) => theme.COLORS.GRAY_900};

  position: relative;

  > .wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PINK_800};
    }
  }
`;
