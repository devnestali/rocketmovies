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
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
  

`;