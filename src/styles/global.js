import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
  }

  body, input, textarea, button {
    cursor: pointer;
    transition: all .4s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  button {
    border: none;
  }

  a {
    text-decoration: none;
  }

`;