import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import 'normalize.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.bg_primary};
    color: ${props => props.theme.e07224};
    font-size: 1rem;
    font-family: 'Press Start 2P', cursive;
  }
`;

const theme = {
  text_primary: '#e07224',
  text_secondary: '#ececec',
  bg_primary: '#f5eb95',
  bg_secondary: '#e07224'
};

ReactDOM.render(<ThemeProvider theme={theme}>
  <GlobalStyle />
  <App />
</ThemeProvider >, document.getElementById('app'));
