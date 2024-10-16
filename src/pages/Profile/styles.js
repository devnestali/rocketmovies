import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 14.4rem;

  padding-left: 14.4rem;
  
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.PINK_900};

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    > a {
      position: absolute;
      left: 50%;

      top: 3rem;
      transform: translateX(-50%);
    }
  }
`;

export const Form = styled.form`
  max-width: 38rem;

  padding: 0 4rem 4rem;

  margin: 0 auto;
`;

export const AvatarProfile = styled.div`
  position: relative;

  margin: -9.3rem auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  @media (max-width:768px) {
    margin: -6.4rem auto 6.4rem;
  }

  > img {
    width: 100%;
    height: 100%;

    border-radius: 50%;

    display: block;
  }

  > label {
    position: absolute;
    bottom: 0;
    right: 0;

    cursor: pointer;

    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK_800};

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BLACK_900};
    }

    > input {
      display: none;
    }
  }
`;