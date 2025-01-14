import styled from "styled-components";

import bg_image from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: stretch;

  @media (max-width: 768px) {
    display: grid;
    place-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 50rem;
  padding: 8rem 4rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK_800};

    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_900};;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 500;
    
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE_800};

    margin: 4.8rem 0;
  }

  > a:last-child {
    margin-top: 4rem;
    align-self: center;
  }
`;

export const BackgroundImg = styled.div`
  flex-grow: 1;
  background: url(${bg_image}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;
