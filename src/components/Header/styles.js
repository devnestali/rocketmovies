import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  
  padding: 0 12.3rem;

  > a {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.PINK};
    
  }
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
      white-space: nowrap;
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