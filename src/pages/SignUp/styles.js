import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    margin-bottom: 4.8rem;
  }

  > a {
    margin: 4.2rem auto 0;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: .25rem;

    > svg {
      font-size: 2.2rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: .5;
`;