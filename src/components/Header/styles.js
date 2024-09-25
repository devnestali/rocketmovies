import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;
  

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  
  padding: 0 12.3rem;
  z-index: 1;
  > a {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.PINK};
    
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 1.6rem;
    line-height: 2.4rem;

    > strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      white-space: nowrap;
      transition: filter .2s;
    }

    > strong:hover {
      filter: brightness(0.9);
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