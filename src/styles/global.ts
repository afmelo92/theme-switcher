import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
    font: 400 16px Roboto, sans-serif;
    border: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`;
