import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: ${({theme}) => theme.gray};
    color: white;
    font-size: 16px;
  }

  a, button, input {
    font-family: inherit;
  }
`;
