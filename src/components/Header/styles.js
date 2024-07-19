import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;
  
  padding: 0 6.4rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 1.6rem;
    line-height: 2.4rem;

    > strong {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > button {
      border: none;
      outline: none;

      background: transparent;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      text-align: end;

      cursor: pointer;
    }
  }
  
`;